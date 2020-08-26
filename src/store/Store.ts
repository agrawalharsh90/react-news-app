import {action, observable} from "mobx";
import Model from '../models/Model';

export type EntityIdentifier = string | number;

export abstract class Store<M extends Model> {
    @observable entities: M[] = [];
    @observable isEntityAdding: boolean = false;

    public get(id: EntityIdentifier): M | undefined {
        return this.entities.find(e => e.id === id);
    }
    @action
    public setIsEntityAdding(val:boolean){
        this.isEntityAdding = val;
    }
    @action
    public push(entity: M) {
        const exists = this.entities.find(e => e.id === entity.getId());
        exists || this.entities.push(entity);
    }

    @action
    public addAll(entities: M[]) {
        entities.forEach(this.push.bind(this));
    }

    @action
    public setDeleted(id: EntityIdentifier) {
        const entity = this.get(id);

        entity?.delete();
    }
}

export default Store;