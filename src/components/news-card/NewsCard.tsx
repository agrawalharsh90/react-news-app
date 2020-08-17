import React from "react";
import './NewsCard.css';

interface NewsCardProps {
    id: string,
    imageUrl: string,
    title: string,
    descripiton: string,
    author: string,
};

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
    return <div className={"NewsCard"}>
        <img src={props.imageUrl} alt="" className={"NewsImage"}/>
        <h2>{props.title}</h2>
        <h5 className={"NewsAuthor"}>{props.author}</h5>
        <p>{props.descripiton}</p>
    </div>

    // return <Card>
    //     <CardActionArea>
    //         <CardMedia image={props.imageUrl}className={"NewsCard"}/>
    //         <CardContent>
    //             <Typography gutterBottom variant="h5" component="h2">
    //                 {props.title}
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary" component="p">
    //                 {props.descripiton}
    //             </Typography>
    //         </CardContent>
    //     </CardActionArea>
    // </Card>;
}

export default NewsCard;