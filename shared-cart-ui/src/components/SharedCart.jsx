import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { ShoppingCart } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle, TextField, makeStyles, Typography } from '@material-ui/core';
import SharedCartContent from './SharedCartContent';
import axios from 'axios';

const useStyles = makeStyles({
    field: {
        width: 400
    },
    button: {
        marginTop: 10,
        backgroundColor: '#0071DC',
        color: 'white'
    },
    createsharedcartbutton: {
        fontSize: 13
    },
    aboutsharedcart: {
        marginRight: 10,
        fontSize: 13
    }
})

const SharedCart = (props) => {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [cartName, setCartName] = useState("");
    const [cartData, setCartData] = React.useState([]);
    const [userId, setUserId] = useState(0);
    const [aboutSharedCart, setAboutSaredCart] = useState(false);

    var aboutSharedCartData = <div>Shared Cart is a group shopping cart provided by Walmart where multiple customers living in vicinity can add items to a common cart, raise the cart total to $50 or more and avail free delivery.
        <div>- Users can create a Shared Cart and share it with their friends / family / neighbours</div>
        <div>- Upto 3 users can be added to a Shared Cart</div>
        <div>- All users in a Shared Cart should provide the same zip code for group order.</div>
        <div>- All items in the Shared Cart will be delivered on the same day.</div>
        <div>- The minimum cart total has to be $50 or more to order using a Shared Cart and avail free delivery benefit.</div>
        <div>- Each user in the shared cart needs to pay for their own items for placing the order</div>
        <div>How to use Shared Cart:</div>
        1) Create a Shared Cart using the Shared Cart button.
        <div>2) Use the Share button on your Shared Cart to copy and share the Cart link with your friends / family / neighbours.</div>
        <div>3) When you launch a shared cart link provided by others, please provide the same zip code as that of the user that shared the link in order to be added to the cart.</div>
        <div>4) Every member of a shared cart can add items to the cart by clicking "Add To Shared Cart" button on the items they like.</div>
        <div>5) When the cart total reaches $50, a "Lock Cart" option will be provided.Please lock the cart after verifying your items.No items can be added or removed after locking the cart.</div>
        <div>6) Post locking the cart, each member of the cart can continue to check out and pay their due amount.</div >
        7) Once all the payments are complete, members can go ahead and place the order.</div >


    let cartID = null
    if (props.match != null) { cartID = props.match.url.slice(3); }

    useEffect(() => {
        axios
            .get("http://localhost:8080/sharedCart/user/" + userId)
            .then((res) => {
                setCartData(res.data);
                console.log(res);
            })
    }, [])

    const createCart = (data) => {
        axios.post('http://localhost:8080/sharedCart/10000/create', data).then(response => {
            console.log(response);
            fetchUserData(userId);
        })
    }


    const addUserToCart = (newUser) => {
        if (cartID != null) {
            axios.post('http://localhost:8080/sharedCart/' + cartID + "/" + newUser + "/add");
        }
    }

    const fetchUserData = (newUser) => {
        axios
            .get("http://localhost:8080/sharedCart/user/" + newUser)
            .then((res) => {
                setCartData(res.data);
            });
    }

    const handleInput = (e) => {
        setCartName(e.target.value)
    }

    const handleLogin = (e) => {
        setUserId(e.target.value)
    }

    return (
        <div style={{ marginTop: '100px', marginLeft: '50px' }}>
            {cartName}

            <Dialog open={!loggedIn} maxWidth="lg">
                <DialogTitle>
                    Login
                </DialogTitle>
                <DialogContent dividers>
                    <TextField
                        onChange={handleLogin}
                        label="UserId"
                        className={classes.field}
                        value={userId}
                        name="userId"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required
                    />
                    <div>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            className={classes.button}
                            onClick={() => {
                                addUserToCart(userId);
                                fetchUserData(userId);
                                setLoggedIn(true);
                            }}>Login</Button>
                    </div>
                    
                </DialogContent>
            </Dialog>

            <div style={{ marginLeft: '35%' }}>
                <Button
                    variant="contained"
                    onClick={() => setAboutSaredCart(true)}
                    className={classes.aboutsharedcart}
                    size="large"
                    color="#0071DC">
                    About Shared Cart</Button>
                <Button
                    variant="contained"
                    onClick={() => setOpenPopup(true)}
                    className={classes.createsharedcartbutton}
                    size="large"
                    color="#0071DC"
                    endIcon={<ShoppingCart />}
                >Create Shared Cart</Button>
            </div>

            {cartData.map((i, j) => (
                <SharedCartContent title={i.cartName} url={i.cartUrl} />
            ))}

            <Dialog open={openPopup} maxWidth="lg">
                <DialogTitle>
                    Cart Deatils
                </DialogTitle>
                <DialogContent dividers>
                    <TextField
                        onChange={handleInput}
                        label="Cart Name"
                        className={classes.field}
                        value={cartName}
                        name="cartName"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required
                    />
                    <div>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            className={classes.button}
                            onClick={() => {
                                createCart({ "cartName": cartName, "itemId": 100 });
                                setOpenPopup(false)
                            }}>
                            Done</Button>
                    </div>
                </DialogContent>
            </Dialog>


            <Dialog open={aboutSharedCart} maxWidth="lg">
                <DialogTitle>
                    About Shared Cart
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant='h5'>
                        {aboutSharedCartData}
                    </Typography>
                    <div>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            className={classes.button}
                            onClick={() => { setAboutSaredCart(false) }}>
                            Close</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SharedCart;