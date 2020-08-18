import axios from "axios";

const APIName = 'http://newsapi.org/v2/';

class ApiService {
    static getInstance(): ApiService {
        return new ApiService();
    }

    async get<T>(relativePath: string, config?: any): Promise<T> {
        return axios.get(APIName + relativePath);
    }
}

export const apiService = ApiService.getInstance();