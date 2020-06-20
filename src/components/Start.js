import React from "react";
import { Button, Container, Typography } from '@material-ui/core';
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    helloThereStyle: {
        fontStyle: "oblique"
    },
    buttonStyle: {
        borderColor: "green",
        boxShadow: "0 5px 5px rgba(0,0,0,0.2)"
    }
})

export default function Start() {
    const classes = useStyles();

    return (
        <>
            <Navbar />
         <Typography className={classes.helloThereStyle} color={"primary"} variant={"h1"} align={"center"}>Let the games begin!</Typography>
             <Link to={"/game"}>
            <Button className={classes.buttonStyle} color={"primary"} fullWidth variant={"outlined"}>PLAY</Button>
         </Link>

        </>
    )

}