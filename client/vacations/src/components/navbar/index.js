import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { AppLinks } from "../appRouter/appRouter";
import { routes } from "../appRouter/route.config";
import { setUser } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));


export default function ButtonAppBar() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);
    const token = localStorage.getItem("token");
    console.log('users', user)
    function logout() {
        localStorage.removeItem("token");
        dispatch(setUser(null))
    }
    const handleAuth = () => {
        const route = (user || token) ? <Button color="inherit">
            <Link onClick={logout} style={{ color: "white" }} to={'/login'}>{'logout'}</Link>
        </Button> : <Button color="inherit">
                <Link style={{ color: "white" }} to={'/login'}>{'login'}</Link>
            </Button>
        return route
    }

    const classes = useStyles();
    const route = handleAuth()
    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    ></IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Roman's Vacations
          </Typography>
                    {route}
                    <AppLinks routes={routes} />
                </Toolbar>
            </AppBar>
        </div>
    );
}