import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Navbar(props) {
    const { classes } = props;
    return (

        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to="/">
                        LPG React Starter Templates
                    </Typography>
                    <Button color="inherit">Scan Pass(es)</Button>
                    <Button color="inherit">Generate Report</Button>
                    <Button color="inherit">Support</Button>
                    <Button variant="outlined" component={Link} to="/login" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {/* <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to="/">
                        LPG React Starter Templates
                    </Typography>
                    <Button component={Link} to="/login" color="inherit">Login</Button>
                </Toolbar>
            </AppBar> */}
        </div>

    );

}
Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
