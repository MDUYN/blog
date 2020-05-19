import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from "@material-ui/core/Link";

const FooterContent = () => {
    const preventDefault = (event) => event.preventDefault();

    return (
        <div style={{ maxWidth: 700, margin: 'auto', textAlign: 'center' }}>
            <Typography variant="caption" align={'center'}>
                © Copyright 2020
            </Typography>
            <br/>
            <br/>
            <Typography variant="caption" align={'center'}>
                The views and opinions expressed are those of the author (Marc van Duyn) and do not necessarily reflect the
                official policy or position of any project I am working on or organization I am part of.
            </Typography>
            <Divider style={{ margin: '24px auto', width: 60 }} />
            <Grid container justify={'center'} spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography align={'center'} gutterBottom color={'textSecondary'}>
                        <Link href="/article/about">
                            About
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography align={'center'} gutterBottom color={'textSecondary'} >
                        <Link href="/articles">
                            Articles
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href="/contact me" onClick={preventDefault}>
                        Contact me
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

FooterContent.propTypes = {};
FooterContent.defaultProps = {};

export default FooterContent;