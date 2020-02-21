
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from '../axios/mainAxios'


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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [report, setReport] = React.useState([]);
  const handleOpen = () => {
    setOpen(true);
    likeReport()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const likeReport = async (id) => {
    try {
      const res = await axios.get("http://localhost:3200/vacation/likedVacationReport", {
      });
      setReport(res.data);
    } catch (error) {
      console.log('fetch errr', error);
    }

  };

  return (
    <div>
      <Button type="button" variant="contained" color="primary" onClick={handleOpen}>
        reports
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

          <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                liked reports
        </Typography>
              <div>
                <VictoryChart
                  domainPadding={25}
                  theme={VictoryTheme.material}
                  width={850}
                >
                  <VictoryAxis

                    tickValues={report.map(report => {
                      return report.name
                    })}
                  />
                  <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x / 1}`)}
                  />
                  <VictoryStack
                    colorScale={"warm"}
                  >
                    <VictoryBar
                      data={report}
                      x={"name"}
                      y={"liked"}
                    />
                  </VictoryStack>
                </VictoryChart>
              </div>
            </div>

          </Container>
        </Fade>
      </Modal>
    </div>
  );
}








