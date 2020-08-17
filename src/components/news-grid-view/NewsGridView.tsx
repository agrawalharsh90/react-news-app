import React from "react";
import NewsCard from "../news-card/NewsCard";

const NewsGridView: React.FC = () => {
    return <NewsCard
        imageUrl={'https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-720038230.jpg'}
        title={'Sample News'} author={'Sample'} descripiton={'This is sample News for Ui Testing'} id={'1'}/>;
}

export default NewsGridView;