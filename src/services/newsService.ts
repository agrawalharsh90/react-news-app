import { apiService } from "./apiService";
import { v4 as uuid } from "uuid";
import {NewsModel} from "../models/NewsModel";

class NewsService {
  static getInstance(): NewsService {
    return new NewsService();
  }

  async getNews(apikey: string): Promise<NewsModel[]> {
    return await apiService
      .get<NewsModel[]>(`top-headlines?country=in&apikey=${apikey}`)
      .then((res: any) => {
        return res.data.articles.map((article: any) => {
          return {
            id: uuid(),
            ...article,
          } as NewsModel
        });
      });
  }
}

export const newsService = NewsService.getInstance();
