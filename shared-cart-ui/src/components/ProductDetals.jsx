import React from 'react'

import { Card, CardMedia, CardContent, Typography, Button, CardActions, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    cardmedia : {
        marginTop: 100,
        width: 1000
    },
    card: {
        
        marginTop: 100,
        marginLeft: 200,
        width: 1000
    },

    cardcontent: {
        width: 1000
    },
    button: {
        backgroundColor: '#0071DC',
        color: 'white'
    }
})


const ProductDetails = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="green iguana"
                className={classes.cardmedia}
                image={require("../assets/homepagebg.png")}
            />
            <CardContent className={classes.cardcontent}>
                <Typography gutterBottom variant="h3" component="div">
                    Lizard
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
            <Button className={classes.button} size="large">Add to Cart</Button>
            <Button className={classes.button} size="large">Add to Shared Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductDetails;