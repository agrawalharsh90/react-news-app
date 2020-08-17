import React from "react";
import { AppBar } from '@material-ui/core';

export const Header : React.FC = ()=>{
    return <AppBar position={"fixed"}>
        <h1>News Website</h1>
    </AppBar>
}