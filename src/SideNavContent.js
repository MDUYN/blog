import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub, faGitlab, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    fontAwesomeIcon: {
        marginRight: 10
    }
}));

const SideNavContent = () => {
    const classes = useStyles();

    return (
        <List>
            <ListItem component="a">
                <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.fontAwesomeIcon} />
                <ListItemText primary="The Hague, Netherlands" />
            </ListItem>
            <ListItem button component="a" href="https://nl.linkedin.com/in/marc-van-duyn-24330b16a">
                <FontAwesomeIcon icon={faLinkedin} color={'#2867B2'} className={classes.fontAwesomeIcon} />
                <ListItemText primary="Linkedin" />
            </ListItem>
            <ListItem button component="a" href="https://github.com/MDUYN">
                <FontAwesomeIcon icon={faGithub} className={classes.fontAwesomeIcon} />
                <ListItemText primary="GitHub" />
            </ListItem>
            <ListItem button component="a" href="https://gitlab.com/DUYN">
                <FontAwesomeIcon icon={faGitlab} className={classes.fontAwesomeIcon} color={'#FC6D26'}/>
                <ListItemText primary="GitLab" />
            </ListItem>
            <ListItem button component="a" href="https://stackoverflow.com/users/6817837/marc">
                <FontAwesomeIcon icon={faStackOverflow} className={classes.fontAwesomeIcon} color={'#f48024'}/>
                <ListItemText primary="Stack Overflow" />
            </ListItem>
        </List>
    );
}

export default SideNavContent;