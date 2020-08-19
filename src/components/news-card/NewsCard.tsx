import React from "react";
import "./NewsCard.scss";
import {Box, Card, CardContent, CardMedia, Tooltip, Typography,} from "@material-ui/core";

interface NewsCardProps {
    id: string;
    imageUrl?: string;
    title?: string;
    descripiton?: string;
    author?: string;
}

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
    return (
        <Box className={"article-card-container"} key={props.id}>
            <Card style={{height: "100%"}}>
                <CardMedia image={props.imageUrl ?? "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-720038230.jpg"}/>
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
