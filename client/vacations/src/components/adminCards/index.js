import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import EditBtn from '../edit'
import axios from 'axios'
const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '18rem', height: '26rem' },
};

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));



export default function Cards(props) {
    const classes = useStyles();
    const { value } = props
    console.log(value);
    const { id, capital, description, price, imageURL } = value

    const deleteRequest = async () => {
        try {
            await axios.post("http://localhost:3200/vacation/deleteVacation", {
                id
            });
        } catch (error) {
            console.log('fetch errr', error);
        }

    };


    return (



        <Grid item key={id} xs={12} sm={6} md={4}>
            <Box borderColor="primary.main" borderRadius="1%" {...defaultProps}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={imageURL}
                        title={imageURL}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {capital}
                        </Typography>
                        <Typography>
                            {description}

                        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                            {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={deleteRequest}>
                            Delete
</Button>
                        <EditBtn data={value} />
                    </CardActions>
                </Card>
            </Box>

        </Grid>

    );
}