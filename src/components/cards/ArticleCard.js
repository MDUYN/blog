import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const ArticleCard = props => {
    const classes = useStyles();

    const {
        id,
        title,
        shortDescription
    } = props;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" href={id}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}

ArticleCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
}

export default ArticleCard;