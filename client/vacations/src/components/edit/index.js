import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import useSetStateform from '../hooks/useSetState'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios'



const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EditModal(props) {
    const { data } = props
    const { id, capital, description, price, imageURL, startDate, endDate } = data

    const initialState = { id: id, capital: capital, description: description, price: price, imageURL: imageURL, startDate: startDate, endDate: endDate };
    const [formData, onChangeInput] = useSetStateform(initialState);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const editRequest = async () => {
        try {
            await axios.post("http://localhost:3200/vacation/editVacation", {
                ...formData
            });


        } catch (error) {
            console.log('fetch errr', error);
        }

    };

    return (
        <div>
            <Button type="button" variant="contained" color="primary" onClick={handleOpen}>
                edit
</Button>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <EditIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                change vacation
        </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="imageURL"
                                    label="imageURL"
                                    name="imageURL"
                                    autoComplete="imageURL"
                                    autoFocus
                                    multiline
                                    onChange={onChangeInput}
                                    value={formData.imageURL}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="capital"
                                    label="capital"
                                    name="capital"
                                    autoComplete="capital"
                                    autoFocus
                                    onChange={onChangeInput}
                                    value={formData.capital}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    multiline
                                    name="description"
                                    label="description"
                                    type="description"
                                    id="description"
                                    autoComplete="description"
                                    onChange={onChangeInput}
                                    value={formData.description}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="price"
                                    label="price"
                                    type="price"
                                    id="price"
                                    autoComplete="price"
                                    onChange={onChangeInput}
                                    value={formData.price}
                                />
                                <TextField
                                    id="startDate"
                                    label="startDate"
                                    name="startDate"
                                    type="date"
                                    defaultValue={formData.startDate}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="startDate"
                                    onChange={onChangeInput}
                                    fullWidth
                                />
                                <TextField
                                    id="endDate"
                                    label="endDate"
                                    name="endDate"
                                    type="date"
                                    defaultValue={formData.endDate}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="endDate"
                                    onChange={onChangeInput}
                                    fullWidth
                                />

                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={editRequest}
                                >
                                    Submit changes
</Button>
                            </form >
                        </div>
                    </Container>

                </Fade>
            </Modal>
        </div>
    );
}

