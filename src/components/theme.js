import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
    palette: {
        primary: {
            main: '#5A0A77',
        },
        secondary: indigo // Indigo is probably a good match with pink
    },
    // overrides: {
    //     MuiButton: {
    //         root: {
    //             color: 'white',
    //             '&:hover': {
    //                 backgroundColor: '#FC8DFF'
    //             }
    //         }
    //     }
    // }
});