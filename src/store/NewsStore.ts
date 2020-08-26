import Store from "./Store";
import {NewsModel} from "../models/NewsModel";
import {action} from "mobx";
import {newsService} from "../services/newsService";

export class NewsStore extends Store<NewsModel> {
    private static _instance: NewsStore;

    static getInstance(): NewsStore {
        if (!this._instance) {
            this._instance = new NewsStore();
        }
        return this._instance
    }

    constructor() {
        super();
        NewsModel._store = this;
    }

    @action
    getNews(){
        newsService.getNews();
    }
}