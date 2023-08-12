import react, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { jsPDF } from "jspdf";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function Quiz(props) {
    const arr = [
        {
            id: 1,
            quiz: " Which of the following selector matches a element based on its id?",
            options: [
                "The Id Selector",
                "The Universal Selector",
                "The Descendant Selector",
                "The Class Selector",
            ],
            correct: "The Id Selector",
        },
        {
            id: 2,
            quiz: "Which of the following property is used to control the position of an image in the background?",
            options: [
                "background-color",
                "background-image",
                "background-repeat",
                "background-position",
            ],
            correct: "background-position",
        },
        {
            id: 3,
            quiz: " Which of the following property is used to underline, overline, and strikethrough text?",
            options: [
                "text-indent",
                "text-align",
                "text-decoration",
                "text-transform",
            ],
            correct: "text-decoration",
        },
        {
            id: 4,
            quiz: " Which of the following property is used to set the height of an image?",
            options: ["border", "height", "width", "-moz-opacity"],
            correct: "height",
        },
        {
            id: 5,
            quiz: "Which of the following property specifies the left margin of an element?",
            options: ["margin", "margin-bottom", "margin-left", "margin-top"],
            correct: "margin-left",
        },
        {
            id: 6,
            quiz: "Which of the following value of cursor shows it as a pointing hand?",
            options: ["crosshair", "default", "pointer", "move"],
            correct: "pointer",
        },
    ];
    const [result, setResult] = useState("0");
    const [select, setSelect] = useState({});

    const results = () => {
        let TotalSelect = Object.keys(select).length;
        if (TotalSelect != arr.length) {
            alert("Every Question Is Compulsary");
        } else {
            console.log(select);
            let score = 0;
            arr.map((ele) => {
                console.log(ele.correct, select[ele.id]);
                if (ele.correct == select[ele.id]) {
                    score = score + 1;
                }
            });
            setResult(score);

            props.setresultMethod(score)
            props.pageChanger();
        }
    };
    const setdata = (e) => {
        console.log(select);
        setSelect({ ...select, [e.target.name]: e.target.value });
    };
    const Download = () => {
        let len = arr.length;
        let name = localStorage.getItem("name");
        const doc = new jsPDF();
        doc.text(` ${name} Your Score is ${result} Out Of ${len}`, 10, 10);
        doc.save(`${name}.pdf`);
    };

    return (
        <>
            <Container
                maxWidth={false}
                style={{
                    backgroundColor: props.quizbg,
                    color: props.font,
                    paddingBottom: "4%",
                }}
            >
                <Container style={{ paddingTop: "4%" }}>
                    {arr.map((ele) => (
                        <>
                            <Typography variant="h5">
                                ({ele.id}){ele.quiz}
                            </Typography>

                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-labelledby={`quiz-question-${ele.id}`}
                                    name={`quiz-question-${ele.id}`}
                                >
                                    {ele.options.map((op) => (
                                        <>
                                            <FormControlLabel
                                                value={op}
                                                name={ele.id}
                                                control={<Radio />}
                                                label={op}
                                                onChange={(e) => {
                                                    setdata(e);
                                                }}
                                            />
                                            <br />
                                        </>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </>
                    ))}

                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            sx={{
                                margin: "0", // No margin by default
                                "@media (max-width: 600px)": {
                                    marginBottom: "3%", // Apply margin on screens with max width of 600px
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                onClick={() => {
                                    results();
                                }}
                                style={{ width: "90%" }}
                            >
                                Submit
                            </Button>
                        </Grid>

                        {/* <Grid item xs={12} md={4}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    Download();
                                }}
                                style={{ width: "90%" }}
                            >
                                Download
                            </Button>
                        </Grid> */}
                    </Grid>
                </Container>
            </Container>
        </>
    );
}
export default Quiz;
