import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const tiers = [
    {
        title: 'All-Inclusive',
        price: '+131',
        description: ['Pick the number of days', 'Enjoy admission to 35+ Las Vegas attractions', 'Free guidebook', 'Email support'],
        buttonText: 'Buy Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Explorer',
        subheader: 'Most popular',
        price: '+231',
        description: ['Pick the number of attractions', 'Enjoy admission to 3,4,5,7 attractions and experiences.', 'Free guidebook', 'Email support'],
        buttonText: 'Buy Now',
        buttonVariant: 'contained',
    },
    {
        title: 'Build Your Own',
        price: '+31',
        description: ['Pick the number of days', 'Enjoy admission to 35+ Las Vegas experiences.', 'Free guidebook', 'Email support'],
        buttonText: 'Buy Now',
        buttonVariant: 'outlined',
    },
];
const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

function Products(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Las Vegas
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" component="p">
                        Visit multiple attractions for one low price. Everything included – pay nothing at the gate. Download to your smartphone – scan and go. Choose as you go from top Las Vegas attractions.
                    </Typography>
                </div>
                {/* End hero unit */}
                <Grid container spacing={40} alignItems="flex-end">
                    {tiers.map(tier => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Explorer' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /mo
                    </Typography>
                                    </div>
                                    {tier.description.map(line => (
                                        <Typography variant="subtitle1" align="center" key={line}>
                                            {line}
                                        </Typography>
                                    ))}
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </main>
            {/* Footer */}
            <footer className={classNames(classes.footer, classes.layout)}>
                <Grid container spacing={32} justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            {footer.description.map(item => (
                                <Typography key={item} variant="subtitle1" color="textSecondary">
                                    {item}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

Products.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);