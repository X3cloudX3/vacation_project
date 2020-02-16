import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EditBtn from '../edit'
import axios from '../axios/mainAxios'
import moment from 'moment'
import { setVacations } from '../../redux/actions';
import { useDispatch } from 'react-redux';

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
    const { id, capital, description, price, imageURL, start_date, end_date } = value
    const dispatch = useDispatch();
    const deleteRequest = async () => {
        try {
            const res = await axios.post("http://localhost:3200/vacation/deleteVacation", {
                id
            });
            dispatch(setVacations(res.data))
        } catch (error) {
            console.log('fetch errr', error);
        }

    };


    return (

        <Grid item key={id} xs={12} sm={8} md={4} >

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
                    <Typography>
                        departure date:{moment(start_date).format('DD-MM-YYYY')}
                    </Typography>
                    <Typography>

                        return date:{moment(end_date).format('DD-MM-YYYY')}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        price:{price}
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



        </Grid>

    );
}