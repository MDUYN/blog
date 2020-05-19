import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as PropTypes from "prop-types";

//View component to show loading of data
const LoadingView = props => {

    return (
        <>
            <div
                style={{
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item style={{marginBottom: '10px'}}>
                        <Typography variant={"body1"}>{props.message}</Typography>
                    </Grid>
                    <Grid>
                        <CircularProgress color={"primary"}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
};

LoadingView.propTypes = {
    message: PropTypes.string
}



export default LoadingView;