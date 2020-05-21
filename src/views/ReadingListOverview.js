import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/core/styles";


const styles = makeStyles(theme => ({
    root: {
        padding: 16,
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
                <Typography weight={'bold'} variant={'h4'} gutterBottom>
                    Reading List
                </Typography>
                <Typography gutterBottom>
                    <b>This post is a list of articles, blogs and other resources that I commonly reference and actively update.</b>
                </Typography>
                <br/>
                <br/>
                <br/>
                <Typography weight={'bold'} variant={'h5'} gutterBottom>
                    Books
                </Typography>
                <Typography component={'div'}>
                    Software Development
                    <ul>
                        <li>
                            <Link href={'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612'}>Design Patterns: Elements of Reusable Object-Oriented Software</Link>
                            <br/>
                            <Typography variant={'overline'}>Must read for every software developer.</Typography>
                        </li>
                        <li>
                            <Link href={'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/ref=sr_1_1?crid=2JRZFFWF0ZWH7&dchild=1&keywords=clean+architecture&qid=1590064435&sprefix=clean+ar%2Caps%2C231&sr=8-1'}>Clean Architecture</Link>
                            <br/>
                            <Typography variant={'overline'}>The foundations of software architecture.</Typography>
                        </li>
                        <li>
                            <Link href={'https://www.amazon.com/gp/product/B001GSTOAM/ref=dbs_a_def_rwt_bibl_vppi_i0'}>Clean Code</Link>
                            <br/>
                            <Typography variant={'overline'}>Do everyone on your software development team a favor and read it.</Typography>
                        </li>
                        <li>
                            <Link href={'https://www.amazon.com/gp/product/B0050JLC9Y/ref=dbs_a_def_rwt_bibl_vppi_i2'}>The Clean Coder</Link>
                            <br/>
                            <Typography variant={'overline'}>If you are serious about writing software. only read it after you read everything else first.</Typography>
                        </li>
                        <li>
                            <Link href={'https://www.amazon.com/Making-Software-Really-Works-Believe/dp/0596808321'}>Making Software: What Really Works, and Why We Believe It</Link>
                            <br/>
                            <Typography variant={'overline'}>Very good read about software development concepts that are validated and supported by scientific evidence.</Typography>
                        </li>
                    </ul>
                </Typography>
                <br />
                <br />
                <Typography component={'div'}>
                    Money Management
                    <ul>
                        <li>
                            <Link href={'https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Paperback/dp/B0161N2F66/ref=sr_1_2?crid=1IWXRGQE2UNTW&dchild=1&keywords=the+intelligent+investor&qid=1590066321&s=books&sprefix=The+inte%2Cstripbooks-intl-ship%2C484&sr=1-2'}>The Intelligent Investor</Link>
                            <br/>
                            <Typography variant={'overline'}>A very good foundation on how to behave when investing and especially what not to do.</Typography>
                        </li>
                        <li>
                            <Link href={'https://www.amazon.com/Security-Analysis-Classic-Benjamin-Graham/dp/0071448209/ref=sr_1_4?crid=1VXIV4FKZFH4P&dchild=1&keywords=security+analysis+benjamin+graham&qid=1590066433&s=books&sprefix=securit%2Cstripbooks-intl-ship%2C225&sr=1-4'}>Security Analysis</Link>
                            <br/>
                            <Typography variant={'overline'}>Explains you how to analyse a company and its stock value.</Typography>
                        </li>
                        <li>
                            <Link href={'https://www.amazon.com/Value-Investing-Graham-Buffett-Finance-ebook/dp/B000YIWF4C/ref=sr_1_2?crid=1G3MBMBWG0GEW&dchild=1&keywords=value+investing&qid=1590066972&s=books&sprefix=value+investing%2Cstripbooks-intl-ship%2C226&sr=1-2'}>Value Investing: From Graham to Buffett and Beyond</Link>
                            <br/>
                            <Typography variant={'overline'}>A practical explanation about value investing.</Typography>
                        </li>
                    </ul>
                </Typography>
                <br/>
                <br/>
                <Typography component={'div'}>
                    General
                    <ul>
                        <li>
                            <Link href={'https://www.amazon.com/12-Rules-for-Life-audiobook/dp/B0797Y87JC/ref=sr_1_1?crid=3K7QA67HIE3CK&dchild=1&keywords=12+rules+for+life&qid=1590067669&s=books&sprefix=12+ru%2Cstripbooks-intl-ship%2C572&sr=1-1'}>12 Rules for Life: An Antidote to Chaos</Link>
                            <br/>
                            <Typography variant={'overline'}>Some solid advice.</Typography>
                        </li>
                        <li>
                            <Link href={'https://www.amazon.com/Biocentrism-Consciousness-Understanding-Nature-Universe-ebook/dp/B003PJ6UHA/ref=sr_1_1?crid=1WRBCGLFJTKK1&dchild=1&keywords=biocentrism&qid=1590079201&s=digital-text&sprefix=biocentri%2Cdigital-text%2C222&sr=1-1'}>Biocentrism: How Life and Consciousness are the Keys to Understanding the True Nature of the Universe</Link>
                            <br/>
                            <Typography variant={'overline'}>Makes you think and question everything.</Typography>
                        </li>
                    </ul>
                </Typography>
            </div>
    );
}

ReadingListOverview.propTypes = {}

export default ReadingListOverview;