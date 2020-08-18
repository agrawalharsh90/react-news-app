import React from "react";
import "./NewsCard.scss";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Tooltip,
} from "@material-ui/core";

interface NewsCardProps {
  id: string;
  imageUrl: string;
  title: string;
  descripiton: string;
  author: string;
}

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
  return (
    <Box className={"article-card-container"} key={props.id}>
      <Card style={{ height: "100%" }}>
        <CardMedia image={props.imageUrl} />
        <Tooltip
          placement={"top"}
          title={<Typography variant={"h5"}>{props.title || ""}</Typography>}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "40%",
            }}
          >
            <div>
              <Typography variant={"h4"} color={"secondary"}>
                {props.title}
              </Typography>
              <Typography variant={"h5"}>
                Source: {props.descripiton}
              </Typography>
            </div>
            <Typography variant={"h6"} align={"right"}>
              By {props.author}
            </Typography>
          </CardContent>
        </Tooltip>
      </Card>
    </Box>
  );
};

export default NewsCard;
