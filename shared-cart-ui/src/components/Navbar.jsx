import React from 'react'
import HomePage from './HomePage';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from '@material-ui/core';
import logo from "../assets/logowhite.svg"
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import shoppingCart from '../assets/shopping-cart.svg'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    tooltip: {
        font: 20
    }
})

const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position='fixed' style={{ background: '#0071DC' }}>
                <Toolbar>
                    <div style={{ marginLeft: '10px' }}>
                        <Link href='/'>
                            <img src={logo} height='46px' />
                        </Link>
                    </div>
                    <div style={{ marginLeft: '1340px' }}>
                        <Tooltip title="Shared Cart">
                            <Link href='/sharedcart'>
                                <img src={shoppingCart} height='30px' />
                            </Link>
                        </Tooltip>
                        <Tooltip title="Personal Cart">
                            <Link href='/personalcart'>
                                <img src={shoppingCart} height='30px' style={{ marginLeft: '30px' }} />
                            </Link>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;