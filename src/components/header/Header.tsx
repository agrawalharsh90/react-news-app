import React from "react";
import { Box, Typography } from "@material-ui/core";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <Box className={"app-bar"}>
      <Typography variant={"h3"} color={"primary"}>
        React News App
      </Typography>
    </Box>
  );
};
