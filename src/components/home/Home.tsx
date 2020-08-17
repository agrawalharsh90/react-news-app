import React from "react";
import {Header} from "../header/Header";
import NewsGridView from "../news-grid-view/NewsGridView";

export const Home: React.FC = () => {
    return <div>
        <Header/>
        <NewsGridView/>
    </div>
}