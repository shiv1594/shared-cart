import React, { useState } from 'react'
import { makeStyles, Paper, Container, Typography, Button, DialogTitle, Dialog, DialogContent } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        marginTop: 20
    },
    sharedcartbutton: {
        marginLeft: 10,
        fontSize: 12,
        backgroundColor: '#0071DC',
        color: 'white'
    },
    button: {
        marginLeft: 20,
        backgroundColor: '#0071DC',
        color: 'white'
    },
})

const SharedCartContent = (props) => {
    const classes = useStyles()
    const { title, url } = props
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <div>
            <Container component={Paper} maxWidth="md" className={classes.container}>
                <div style={{ display: 'flex', padding: '20px 20px 20px 20px' }}>
                    <Typography variant='h4' style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => setOpenPopup(true)}
                        className={classes.sharedcartbutton}>
                        Share
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        className={classes.sharedcartbutton}>
                        Open
                    </Button>
                </div>
            </Container>

            <Dialog open={openPopup} maxWidth="lg">
                <DialogTitle>
                    Shared Cart Deatils
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant=''>
                        {url}
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.button}
                        onClick={() => { setOpenPopup(false), navigator.clipboard.writeText(url) }}>
                        Copy</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SharedCartContent;