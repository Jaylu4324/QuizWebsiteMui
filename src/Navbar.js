import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function MenuAppBar(props) {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup> */}
            <AppBar position="static" style={{ backgroundColor: props.navBg, color: "White" }}>
                <Toolbar>

                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} align={"center"} s>
                        Quiz Website
                    </Typography>
                    <Switch

                        onClick={props.modeChanger}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />

                    {`${props.mode} Mode`}


                </Toolbar>

            </AppBar>
        </Box>
    );
}