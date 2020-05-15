import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const HeaderContent = () => {

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
                        <Button>Reading list</Button>
                    </Grid>
                    <Grid item>
                        <Button>Articles</Button>
                    </Grid>
                    <Grid item>
                        <Button>Projects</Button>
                    </Grid>
                    <Grid item>
                        <Button>Resume</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </div>
    )
}

export default HeaderContent;