import {observable} from "mobx";
import {NewsStore} from "./NewsStore";

export class RootStore {
    private static _instance: RootStore;
    @observable news: NewsStore;

    constructor() {
        this.news = NewsStore.getInstance();
    }

    static getInstance(): RootStore {
        if (!this._instance) {
            this._instance = new RootStore();
        }

        return this._instance;
    }
}