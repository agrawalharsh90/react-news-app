import React from "react";
import NewsCard from "../news-card/NewsCard";
import "./NewsGridView.scss";
import {NewsModel} from "../../models/NewsModel";

interface NewsGridViewProps {
    isLoading: boolean,
    newsList: NewsModel[]
}

const NewsGridView: React.FC<NewsGridViewProps> = (props: NewsGridViewProps) => {
    if (props.isLoading != null && props.isLoading)
        return <span>Loading...</span>;
    if(props.newsList.length<1)
        return <span>Sorry Unable To Load...</span>
    return (
        <div className={"newsGridViewTop"}>
            {props.newsList.map((item) => (
                <NewsCard
                    key = {item.id}
                    imageUrl={item.urlToImage}
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    descripiton={item.description}
                />
            ))}
        </div>
    );
};

export default NewsGridView;
