import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

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
        <MuiThemeProvider theme={theme}>
            <div className={classes.root} >
                <AppBar position="static" ccolor="default">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to="/">
                            LPG React Starter Templates
                    </Typography>
                        <Button color="inherit">Scan Pass(es)</Button>
                        <Button color="inherit" component={Link} to="/reports">Generate Report</Button>
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
        </MuiThemeProvider>

    );

}
Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
