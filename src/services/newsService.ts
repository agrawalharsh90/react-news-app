import { apiService } from "./apiService";
import { v4 as uuid } from "uuid";

class NewsService {
  static getInstance(): NewsService {
    return new NewsService();
  }

  async getNews(apikey: string): Promise<any[]> {
    return await apiService
      .get<any[]>(`everything?apikey=${apikey}`)
      .then((res: any) => {
        return res.data.articles.map((article: any) => {
          return {
            id: uuid(),
            ...article,
          };
        });
      });
  }
}

export const newsService = NewsService.getInstance();
