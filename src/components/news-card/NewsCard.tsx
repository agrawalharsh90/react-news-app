import React from "react";
import './NewsCard.css';

interface NewsCardProps {
    id: string,
    imageUrl: string,
    title: string,
    descripiton: string,
    author: string,
};

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
    return <div className={"NewsCard"}>
        <img src={props.imageUrl} alt="" className={"NewsImage"}/>
        <h2>{props.title}</h2>
        <h5 className={"NewsAuthor"}>{props.author}</h5>
        <p>{props.descripiton}</p>
    </div>
}

export default NewsCard;