import React from "react";
import NewsCard from "../news-card/NewsCard";
import './NewsGridView.css';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const NewsGridView: React.FC = () => {
    return <div className={"NewsGridViewTop"}> {list.map(item =>
        <NewsCard
            imageUrl={'https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-720038230.jpg'}
            title={'Sample News'} author={'Sample'} descripiton={'This is sample News for Ui Testing'} id={'1'}/>
    )}</div>;
}

export default NewsGridView;