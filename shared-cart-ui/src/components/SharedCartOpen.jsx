import React, { useState } from 'react'
import { Typography, Button, makeStyles, Grid, ButtonBase, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    text: {
        marginRight: 30,
        marginTop: 30
    },
    button: {
        marginTop: 25,
        height: 40,
        backgroundColor: '#0BDA51',
        fontSize: 15
    },
    usernametext: {
        marginLeft: 20,
        marginBottom: 10
    },
    checkoutbutton: {
        marginTop: 20,
        height: 80,
        width: 80,
        backgroundColor: '#0BDA51',
        fontSize: 12
    }
})

const SharedCartOpen = () => {
    const classes = useStyles()
    const [sharedCartTotal, setSharedCartTotal] = useState(60)
    const [checkoutButton, enableCheckoutButton] = useState(true)
    const [totalamount, setTotalAmount] = useState(0)
    const disable = sharedCartTotal >= 50 ? false : true;


    return (
        <div style={{ marginTop: '100px', marginLeft: '80px' }}>
            <Typography variant='h3'>
                Shared Cart Name 1
            </Typography>
            <div style={{ width: '1000px', marginTop: '30px' }}>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 300,
                        flexGrow: 1
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography variant='h5' className={classes.usernametext}>
                                User name
                            </Typography>
                            <ButtonBase>
                                <img alt="complex" src={require('../assets/homepagebg.png')} width="300" height="150" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant='h4' component="div" className={classes.text}>
                                        Product Name
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item className={classes.text}>
                                <Typography variant="h4" component="div">
                                    $19.00
                                </Typography>
                            </Grid>
                            <Grid item className={classes.text}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    disabled={checkoutButton}
                                    className={classes.checkoutbutton}>
                                    Continue to Checkout
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            <Typography variant='h4' className={classes.text}>
                Shared Cart Total : {totalamount}
            </Typography>

            {!disable ? <div style={{ color: "green", marginTop: '30px' }}><h4>Eligible for free delivery</h4></div> : ""}

            <Button
                variant="contained"
                disabled={disable}
                size="large"
                className={classes.button}
                onClick={() => enableCheckoutButton(false)}
            >Lock Cart
            </Button>
        </div >
    )
}

export default SharedCartOpen;