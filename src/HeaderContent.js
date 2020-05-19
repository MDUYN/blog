import React from "react";
import cx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const linkIsActive = (link, location) => {
    const { pathname } = location;

    if (link === '/') {
        return pathname === link;
    }
    return pathname.includes(link)
};

const useStyles = makeStyles (theme=>({
    header: {
        marginLeft: theme.spacing(2)
    },
    grow: {
        flexGrow: 1
    },
    button: {
        marginRight: theme.spacing(2),
    },
    activeButton: {
        color: theme.palette.primary.main,
    },
    toolBar: {
        alignItems: 'center',
    }
}));

const HeaderContent = props => {
    const classes = useStyles();

    const {
        location
    } = props;

    return (
        <div style={{width: '100%'}}>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={4}
                >
                    <Grid item>
                        <Button className={cx(linkIsActive('/reading-list', location) && classes.activeButton)} href={'/reading-list'}>Reading list</Button>
                    </Grid>
                    <Grid item>
                        <Button className={cx(linkIsActive('/articles', location) && classes.activeButton)} href={'/articles'}>Articles</Button>
                    </Grid>
                    <Grid item>
                        <Button className={cx(linkIsActive('/projects', location) && classes.activeButton)} href={'/projects'}>Projects</Button>
                    </Grid>
                    <Grid item>
                        <Button className={cx(linkIsActive('/resume', location) && classes.activeButton)} href={'/resume'}>Resume</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </div>
    )
}

export default withRouter(HeaderContent);