import React, {useEffect} from "react";
import NewsCard from "../news-card/NewsCard";
import "./NewsGridView.scss";
import {GlobalProps} from "../../App";
import {inject, observer} from "mobx-react";


const NewsGridView: React.FC<GlobalProps> = (props: GlobalProps) => {
    const newsStore = props.store?.news;

    useEffect(() => {
        newsStore?.getNews();
    }, []);
    // if (props.isLoading != null && props.isLoading)
    //     return <span>Loading...</span>;
    // if(props.newsList.length<1)
    //     return <span>Sorry Unable To Load...</span>
    return (
        <div className={"newsGridViewTop"}>
            {newsStore?.entities.map((item) => (
                <NewsCard
                    key={item.id}
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

export default inject('store')(observer(NewsGridView)); ;
