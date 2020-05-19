import React, {useState} from 'react';
import cx from 'clsx';
import {getInsetContainer, getInsetSidebar} from "@mui-treasury/layout";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import ListItemText from "@material-ui/core/ListItemText";
import {faPython} from "@fortawesome/free-brands-svg-icons";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import {ArticleCard} from "../components/cards";
import articles from "../articles";
import PropTypes from 'prop-types';

const InsetSidebar = getInsetSidebar(styled);
const InsetContainer = getInsetContainer(styled);

const styles = makeStyles(theme => ({
    root: {
        padding: 16,
        height: '80vh',
        transition: theme.transitions.create(),
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

const useSideNavStyles = makeStyles(theme => ({
    fontAwesomeIcon: {
        marginRight: 10
    },
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.primary.main,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
    },
    activeItem: {
        color: theme.palette.primary.main
    },
}));

const ArticlesOverviewSideNavContent = props => {
    const classes = useSideNavStyles();

    const {
        setCategory,
        activeCategory
    } = props;

    return (
        <List>
            <ListItem className={classes.categoryHeader}>
                <ListItemText
                    classes={{
                        primary: classes.categoryHeaderPrimary,
                    }}
                >
                    Article Categories
                </ListItemText>
            </ListItem>
            <ListItem button className={cx(classes.item, activeCategory === 'all' && classes.activeItem)} component="a" onClick={() => setCategory('all')}>
                <FontAwesomeIcon icon={faList} className={classes.fontAwesomeIcon}/>
                <ListItemText primary="All"/>
            </ListItem>
            <ListItem button className={cx(classes.item, activeCategory === 'software-engineering' && classes.activeItem)} component="a" onClick={() => setCategory('software-engineering')}>
                <FontAwesomeIcon icon={faProjectDiagram} className={classes.fontAwesomeIcon}/>
                <ListItemText primary="Software Engineering"/>
            </ListItem>
            <ListItem button className={cx(classes.item, activeCategory === 'python' && classes.activeItem)} component="a" onClick={() => setCategory('python')}>
                <FontAwesomeIcon icon={faPython} className={classes.fontAwesomeIcon}/>
                <ListItemText primary="Python"/>
            </ListItem>
        </List>
    )
}

ArticlesOverviewSideNavContent.propTypes = {
    setCategory: PropTypes.func.isRequired,
    activeCategory: PropTypes.string.isRequired,
};


const ArticlesOverview = props => {
    const classes = styles();
    const [category, setCategory] = useState('all');

    const ArticlesContent = () => {

        if(category === 'all') {
            return articles.filter(function(item) {
                return item.category !== 'info'
            });
        }
        else if(category === 'python') {
            return articles.filter(function(item) {
                return item.category === 'python'
            });
        }
        else if(category === 'software-engineering') {
            return articles.filter(function(item) {
                return item.category === 'software-engineering'
            });
        }
    }

    const articlesList = ArticlesContent();

    return (
        <InsetContainer rightSidebar={
            <InsetSidebar sidebarId="secondarySidebar">
                <ArticlesOverviewSideNavContent setCategory={setCategory} activeCategory={category}/>
            </InsetSidebar>
        }>
            <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {
                        articlesList && articlesList.map((article) => (
                            <Grid item>
                                <ArticleCard id={article.id} title={article.title} shortDescription={article.shortDescription}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </InsetContainer>
    );
}

ArticlesOverview.propTypes = {}

export default ArticlesOverview;