import React, {useEffect, useState} from "react";
import {Header} from "../header/Header";
import NewsGridView from "../news-grid-view/NewsGridView";
import {Box} from "@material-ui/core";
import "./Home.scss";
import {newsService} from "../../services/newsService";
import {NewsModel} from "../../models/NewsModel";

export const Home: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [newsData, setNewsData] = useState<NewsModel[]>([]);
    useEffect(() => {
        if (isLoading)
            newsService.getNews('267128845221414d886752c861c8d97a').then((v: NewsModel[]) => {
                setNewsData(v);
                setIsLoading(false);
            });
    });
    return (
        <Box className="dashboard-parent-container">
            <Header/>
            <Box className={"route-content"}>
                <NewsGridView isLoading={isLoading} newsList={newsData}/>
            </Box>
        </Box>
    );
};
