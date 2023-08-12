import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function HelperTextMisaligned(props) {
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const emailset = (e) => {
        setEmail(e.target.value)


    }
    const nameset = (e) => {
        setName(e.target.value)
    }
    const Submit = () => {
        if (name == "" || email == "") {
            alert("Please Fill the Inputs")

        } else {
            localStorage.setItem("email", email)
            localStorage.setItem("name", name)
            props.setNameMethod(name)

            props.pageChanger()
        }

    }
    return (
        <>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ height: "87vh", backgroundColor: props.pagebg }}

            >


                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center" style={{ margin: "1% 0px 2% 0px" }} >

                    <Grid item xs={6}>
                        <TextField sx={{
                            "& .MuiInputBase-root": {
                                color: props.font
                            }
                        }}
                            InputLabelProps={{
                                style: { color: props.font } // Change label color here
                            }} id="demo-helper-text-misaligned-no-helper" style={{ width: "100%", margin: "1% 0% 2% 0%" }} type="email" label="Email" onChange={(e) => { emailset(e) }} required />
                    </Grid>




                </Grid>


                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center" style={{ margin: "0px 0px 2% 0px" }}>

                    <Grid item xs={6}>
                        <TextField id="demo-helper-text-misaligned-no-helper" required sx={{
                            "& .MuiInputBase-root": {
                                color: props.font
                            }
                        }} style={{ width: "100%", margin: "10px;", }} InputLabelProps={{
                            style: { color: props.font } // Change label color here
                        }} label="Name" onChange={(e) => { nameset(e) }} />
                    </Grid>




                </Grid>
                <Grid container direction="row" justifyContent="start" alignItems="center">
                    <Grid items xs={3} ></Grid>
                    <Grid items xs={2}>
                        <Button variant="contained" type="submit" style={{ width: "100%" }} onClick={() => { Submit() }}>Submit</Button>
                    </Grid>

                </Grid>

            </Grid>

        </>

    );
}