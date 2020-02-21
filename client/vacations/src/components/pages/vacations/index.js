import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Cards from '../../cards'

import { getVacations } from "../../../redux/actions";
import { connect } from "react-redux";
import store from '../../../redux/store';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

function Vacations(props) {
    const classes = useStyles();
    const values = Object.values(props.stateArray)
    useEffect(() => {
        const initReq = async () => {
            props.getVacations()
        }
        initReq()
    }, [])
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            roman's vacations
            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            hello and welcome to roman's vacations here you can get the hotest deals
                            on your favoriet places just hit the like button and get the updated on
                            all the sales there is.
            </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {values.map(card => (
                            <Cards value={card} userId={props.id} />
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    roman's project
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    hope you have enjoyed my vacation project i've put alot of work into it
        </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    const { vacations } = state
    return { stateArray: vacations }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVacations: () => dispatch(getVacations()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacations)





