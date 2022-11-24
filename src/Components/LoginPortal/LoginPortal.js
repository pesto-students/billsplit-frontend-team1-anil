import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import Container from "@material-ui/core/Container";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import "./LoginPortal.css";
import Logo from "../../Img/black_white_logo.png";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  logo: {
    width: "60%",
  },
  div_logo: {
    padding: "0px",
    textAlign: "center",
  },
  icon: {
    fontSize: "80px",
  },
  card: {
    padding: "10px",
    borderRadius: "50px 0px 30px 0px",
  },
  submit_btn: {
    width: "50%",
    backgroundColor: "#e1f5fe",
    "&:hover": {
      backgroundColor: "#0277bd",
      color: "white",
      transitionDuration: "0.5s",
    },
    fontSize: "12px",
    fontWeight: "700",
  },
}));

export default function LoginPortal() {
  // const [error,setError] = useState(""); //shows error message if login failed
  let navigate = useNavigate();
  const [response, setResponse] = useState("");
  const name = useRef("");
  const email = useRef("");
  const pass = useRef("");
  const cpass = useRef("");
  const classes = useStyles();

  function changeRoutes(){
    navigate("/dashboard");
  }

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const data = {
        name: name.current.value,
        email: email.current.value,
        pass: pass.current.value,
        cpass: cpass.current.value,
      };
      if (data.pass === data.cpass) {
        postData(data);
      } else {
        console.log("Password and Confirm Password are incorrect");
      }
    } catch (e) {
      console.log("Incorrect Password or Email");
    }
  };
  const postData = async (data) => {
    const requestParamteres = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch("/user", requestParamteres)
      .then((res) => res.json())
      .then((result) => {
        changeRoutes();
        console.log(result);
      });
  };

  return (
    <>
      <div className="login_main">
        <div className={classes.div_logo}>
          <img src={Logo} className={classes.logo} alt="logo" />
        </div>
        <Card className={classes.card}>
          <ThemeProvider theme={theme}>
            <Container
              component="main"
              maxWidth="xs"
              style={{ textAlign: "center" }}
            >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <PersonRoundedIcon color="primary" className={classes.icon} />
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        autoComplete="given-name"
                        name="Name"
                        required
                        fullWidth
                        type="text"
                        id="Name"
                        label="Name"
                        inputRef={name}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label="Email Address"
                        name="email"
                        inputRef={email}
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        inputRef={pass}
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmpassword"
                        inputRef={cpass}
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I am not a robot"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    className={classes.submit_btn}
                    sx={{ mt: 3, mb: 2 }}
                    color="primary"
                  >
                    Sign Up
                  </Button>
                  <Grid className="footer_link">
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Card>
      </div>
    </>
  );
}
