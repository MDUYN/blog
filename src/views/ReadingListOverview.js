import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


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

const ReadingListOverview = props => {
    const classes = styles();

    return (
            <div className={classes.root}>

            </div>
    );
}

ReadingListOverview.propTypes = {}

export default ReadingListOverview;