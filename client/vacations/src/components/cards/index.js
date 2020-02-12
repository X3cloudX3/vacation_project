import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite'
import ToggleButton from '@material-ui/lab/ToggleButton';
import axios from 'axios'
import moment from 'moment'


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


    const userId = props.userId
    const classes = useStyles();
    const [selected, setSelected] = React.useState(false);
    const { value } = props
    const { id, capital, description, price, imageURL, start_date, end_date } = value


    const toggleFavBtn = async (selected, id, userId) => {
        if (!selected) return addToFav(id, userId)
        return removeFromFav(id, userId)
    };

    const addToFav = async (id, userId) => {
        try {
            await axios.post("http://localhost:3200/vacation/addToFavorites", {
                id, userId
            });
        } catch (error) {
            console.log('fetch errr', error);
        }

    };

    const removeFromFav = async (id, userId) => {
        try {
            await axios.post("http://localhost:3200/vacation/removeFromFavorites", {
                id, userId
            });
        } catch (error) {
            console.log('fetch errr', error);
        }

    };

    return (



        <Grid item key={id} xs={12} sm={6} md={4}>
            
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
                                departure:
                                arrival back:
    
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
                        <CardActions style={{ float: 'right' }} >
                            <ToggleButton
                                value="check"
                                selected={selected}
                                onChange={() => {
                                    setSelected(!selected);
                                    toggleFavBtn(selected, id, userId)
                                }}
                            >
                                <FavoriteIcon />
                            </ToggleButton>
                        </CardActions>
                </Card>
        </Grid>

    );
}