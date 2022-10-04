import * as React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import './LoginPortal.css';
import Logo from '../../Img/black_white_logo.png';


const theme = createTheme();
const useStyles = makeStyles((theme)=>({
    logo:{
        width:'60%',
    },
    div_logo:{
        padding:'0px',
        textAlign:'center'
    },
    icon:{
        fontSize:'80px',
    },
    card:{
        padding:'10px',
        borderRadius:'50px 0px 30px 0px'
    },
    submit_btn:{
        width: '50%',
        backgroundColor:'#e1f5fe',
        '&:hover':{
            backgroundColor:'#0277bd',
            color:'white',
            transitionDuration:'0.5s'
        },
        fontSize:'12px',
        fontWeight:'700'
    },
}));

export default function LoginPortal() {
    const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
    <div className="login_main">
    <div className={classes.div_logo}><img src={Logo} className={classes.logo} alt="logo"/></div>
        <Card className={classes.card}>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" style={{textAlign:'center'}}>
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <PersonRoundedIcon color="primary" className={classes.icon}/>
                {/* <Typography component="h1" variant="h5">
                    Sign up
                </Typography> */}
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        autoComplete="given-name"
                        name="Name"
                        required
                        fullWidth
                        id="Name"
                        label="Name"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
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
                        id="password"
                        autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
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
