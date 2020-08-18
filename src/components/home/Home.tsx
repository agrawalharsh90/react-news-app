import React from "react";
import { Header } from "../header/Header";
import NewsGridView from "../news-grid-view/NewsGridView";
import { Box } from "@material-ui/core";
import "./Home.scss";

export const Home: React.FC = () => {
  return (
    <Box className="dashboard-parent-container">
      <Header />
      <Box className={"route-content"}>
        <NewsGridView />
      </Box>
    </Box>
  );
};
