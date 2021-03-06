import React from 'react';
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
import axios from '../axios/mainAxios'
import { setVacations } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { fields } from '../../config';
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

export default function AddModal() {
    const dispatch = useDispatch();
    const initialState = { capital: "", description: "", price: "", imageURL: "", startDate: "", endDate: "" };
    const [formData, onChangeInput] = useSetStateform(initialState);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addVacationRequest = async () => {
        try {
            const res = await axios.post("http://localhost:3200/vacation/addVacation", {
                ...formData
            });
            dispatch(setVacations(res.data))
            handleClose()
        } catch (error) {
            console.log('fetch errr', error);
        }

    };

    return (
        <div>
            <Button type="button" variant="contained" color="primary" onClick={handleOpen}>
                add vacation
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
                                add vacation
        </Typography>
                            <form className={classes.form} noValidate>
                                {Object.values(fields).map(field => {
                                    const { name, multiline, required } = field;
                                    return <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required={required}
                                        fullWidth
                                        id={name}
                                        label={name}
                                        name={name}
                                        autoComplete={name}
                                        autoFocus
                                        multiline={multiline}
                                        onChange={onChangeInput}
                                        value={formData[name]}
                                    />
                                })}
                                <TextField
                                    id="startDate"
                                    label="startDate"
                                    name="startDate"
                                    type="date"
                                    name="startDate"
                                    defaultValue={formData.startDate}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={onChangeInput}
                                    fullWidth
                                />
                                <TextField
                                    id="endDate"
                                    label="endDate"
                                    name="endDate"
                                    type="date"
                                    name="endDate"
                                    defaultValue={formData.endDate}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={onChangeInput}
                                    fullWidth
                                />
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={addVacationRequest}
                                >
                                    add new vacation
</Button>
                            </form >
                        </div>
                    </Container>

                </Fade>
            </Modal>
        </div>
    );
}

