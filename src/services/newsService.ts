import {apiService} from "./apiService";
import {v4 as uuid} from "uuid";
import {NewsModel} from "../models/NewsModel";

class NewsService {
    static getInstance(): NewsService {
        return new NewsService();
    }

    async getNews(apikey: string = '267128845221414d886752c861c8d97a'): Promise<NewsModel[]> {
        return await apiService
            .get<NewsModel[]>(`top-headlines?country=in&apikey=${apikey}`)
            .then((res: any) => {
                return res.data.articles.map((article: any) => {
                    const newJSON = {
                        id: uuid(),
                        ...article
                    };
                    return NewsModel.fromJson(newJSON)
                });
            });
    }
}

export const newsService = NewsService.getInstance();
