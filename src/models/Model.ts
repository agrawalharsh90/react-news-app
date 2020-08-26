import {action, observable} from "mobx";
import Store, {EntityIdentifier} from '../store/Store';
import {capitalize} from 'lodash';

export type Dictionary<T = any> = { [key: string]: T };

export abstract class Model {
    @observable deleting: boolean = false;
    @observable deleted: boolean = false;

    constructor(readonly id: EntityIdentifier) {
    }

    static getStore(): Store<Model> {
        const store = (this as any)._store;
        if (!store) {
            console.error(`_store not defined in ${this}
            Please define _store and assign 'this' to it in parent store's constructor`);
        }
        return store;
    }

    static fromJson(json: any, identifierKey: string = 'id'): Model {
        const id = json[identifierKey] as EntityIdentifier;

        let entity = this.getOrNew(id);

        entity.updateFromJson(json);
        this.getStore().setIsEntityAdding(false);
        return entity;
    }

    public static getOrNew(id: EntityIdentifier): Model {
        let entity = this.getStore().get(id);

        if (!entity) {
            entity = new (this as any)(id);
            this.getStore().push(entity!);
        }

        return entity!;
    }

    public static get(id: EntityIdentifier) {
        return this.getStore().get(id);
    }

    toJson(): Dictionary {
        return Object.keys(this).reduce((prev, next) => ({
            ...prev,
            [next]: (this as any)[next]
        }), {});
    }

    abstract getId(): EntityIdentifier;

    @action
    updateFromJson(json: Dictionary<any>) {
        for (const k in json) {
            if (json.hasOwnProperty(k)) {
                const deserializer = this.getDeserializer(k);
                if (deserializer) {
                    json[k] && deserializer.bind(this)(json[k]);
                } else {
                    (this as any)[k] = json[k];
                }
            }
        }
    }

    @action
    delete() {
        this.deleted = true;
    }

    private getDeserializer(prop: string) {
        return (this as any)[`deserialize${capitalize(prop)}`];
    }
}

export default Model;