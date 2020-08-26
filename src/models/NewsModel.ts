import Model from "./Model";
import {observable} from "mobx";
import {NewsStore} from "../store/NewsStore";

export type Source = {
    id: string,
    name: string
}

export class NewsModel extends Model {
    static _store: NewsStore;

    @observable source?: Source;
    @observable author?: string;
    @observable title?: string;
    @observable description?: string;
    @observable url?: string;
    @observable publishedAt?: string;
    @observable urlToImage?: string;
    @observable content?: string;

    getId(): string | number {
        return this.id;
    }
}