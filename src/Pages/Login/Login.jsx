import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div style={styles.loginContainer}>
      <Paper elevation={3} style={styles.formContainer}>
        <Typography variant="h5" style={styles.heading}>
          Flight Services Login
        </Typography>
        <form>
          <TextField
            style={styles.textField}
            label="Username"
            variant="outlined"
            fullWidth
          />
          <TextField
            style={styles.textField}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
           <Link to="/flight" style={{ textDecoration: 'none' }}>
          <Button
            style={styles.button}
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
  },
  formContainer: {
    padding: '2rem',
    maxWidth: '400px',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  heading: {
    marginBottom: '1.5rem',
    color: 'black',
  },
  textField: {
    marginBottom: '1rem',
    color: 'black',
  },
  button: {
    marginTop: '1rem',
    color: 'white',
    backgroundColor: 'black',
  },
};

export default LoginForm;
