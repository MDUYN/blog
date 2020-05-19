import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const NotFoundView = () => {

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
                    <Grid item>
                        <Typography variant={"h6"}>This page does not exist</Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
};

export default NotFoundView;