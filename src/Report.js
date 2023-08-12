import react from "react"
import Grid from "@mui/material/Grid";
import { jsPDF } from "jspdf";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Report(props) {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const Download = () => {


        let name = localStorage.getItem("name");
        const currentLocalTime = new Date();
        const formattedTime = currentLocalTime.toLocaleTimeString();



        const doc = new jsPDF();
        doc.text(` Your  Name  : ${props.name}   `, 60, 35);
        doc.text(` Your Score is ${props.result}   `, 60, 55);
        doc.text(`Thank You For Participate.`, 60, 75);
        doc.text(`Score Genrated On ${formattedTime}.`, 60, 95);
        doc.save(`${name}.pdf`);

    }
    const Performance = () => {
        if (props.result > 0 && props.result <= 2) {
            return "Poor Score"

        }

        else if (props.result > 2 && props.result <= 4) {
            return "Good Score"

        } else if (props.result > 4) {
            return "Excellent Score"
        }

    }
    let name = localStorage.getItem("name");
    return (
        <Grid container direction="column"
            alignItems="center" justifyContent="center"
            style={{ paddingTop: "20px", color: props.font, backgroundColor: props.pagebg, height: "80vh" }}>
            <Grid item >
                <Card sx={{ minWidth: 375 }} >
                    <CardContent>

                        <Typography variant="h5" component="div">
                            Name is {name}
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            Your Score is  <b>{props.result}</b> Out Of  6 &nbsp;

                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                            {Performance()}
                        </Typography>
                        <Button variant="contained" onClick={() => { Download(); }} style={{ width: "100%" }} > Download </Button>

                    </CardContent>

                </Card>





            </Grid>
        </Grid >)

}
export default Report;