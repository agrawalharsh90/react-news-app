import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import './NewsCard.css';

interface NewsCardProps {
    id: string,
    imageUrl: string,
    title: string,
    descripiton: string,
    author: string,
};

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
    return (<Card>
        <CardMedia image={props.imageUrl}className={"NewsCardSize"}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.descripiton}
            </Typography>
        </CardContent>
    </Card>);
}

export default NewsCard;