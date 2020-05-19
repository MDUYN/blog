import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withRouter } from "react-router-dom";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faPython} from "@fortawesome/free-brands-svg-icons";

const newestArticleUrl = "/articles/how-much-architecture-is-enough";

const ArticleSideNavContent = () => {

    return (
        <List>
            <ListItem button component="a" href="/articles/introduction">
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="About me" />
            </ListItem>
            <ListItem button component="a" href={newestArticleUrl}>
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

const SecondSideNavContent = props => {

    const {
        location
    } = props;

    const createNav = () => {
        const { pathname } = location;

        if(pathname.includes('articles')) {
            return <ArticleSideNavContent/>
        }
    };

    return (
        createNav()
    );
}

export default withRouter(SecondSideNavContent);