import React from "react";
import {getInsetContainer, getInsetSidebar} from "@mui-treasury/layout";
import { withRouter } from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";

import articles from "../articles";

import ReactMarkdown from "react-markdown";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListItemText from "@material-ui/core/ListItemText";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const InsetContainer = getInsetContainer(styled)
const InsetSidebar = getInsetSidebar(styled)

const styles =  makeStyles(theme => ({
    root: {
        padding: 16,
        transition: theme.transitions.create(),
        height: '80vh',
        [theme.breakpoints.up('sm')]: {
            padding: 24,
            maxWidth: 700,
            margin: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 960,
        },
    },
}));

const SideNavContent = () => {

    return (
        <List>
            <ListItem button component="a" href="/article/about">
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="About me" />
            </ListItem>
            <ListItem button component="a" href="/article/how-much-architecture-is-enough">
                <ListItemIcon>
                    <FiberNewIcon />
                </ListItemIcon>
                <ListItemText primary="Newest article" />
            </ListItem>
            <ListItem button component="a" href='/articles'>
                <ListItemIcon>
                    <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText primary="overview" />
            </ListItem>
        </List>
    );
}

const ArticleView = props => {
    const classes = styles();

    const {
        location
    } = props;

    const { pathname } = location;

    const articleContent = articles.filter(function(item) {
        return item.id === pathname
    });

    console.log(articleContent)
    return (
        <InsetContainer rightSidebar={
            <InsetSidebar sidebarId="secondarySidebar">
                <SideNavContent />
            </InsetSidebar>
        }>
            <div className={classes.root}>
                <ReactMarkdown source={articleContent[0].content} />
            </div>
        </InsetContainer>
    )
}

export default withRouter(ArticleView);
