import React from "react";

interface NewsCardProps {
    id: string,
    imageUrl: string,
    title: string,
    descripiton: string,
    author: string,
};

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
    return <div></div>
}

export default NewsCard;