import React from "react";
import NewsCard from "../news-card/NewsCard";
import "./NewsGridView.scss";

interface NewsGridViewProps{

}
const NewsGridView: React.FC = () => {
  return (
    <div className={"newsGridViewTop"}>
      {[...Array(10)].map((item) => (
        <NewsCard
          imageUrl={
            "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-720038230.jpg"
          }
          title={"Sample News"}
          author={"Sample"}
          descripiton={"This is sample News for Ui Testing"}
          id={"1"}
        />
      ))}
    </div>
  );
};

export default NewsGridView;
