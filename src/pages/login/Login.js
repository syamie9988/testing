import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../components/theme';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/Masterlist'); // Navigate to the Masterlist page
  };

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [theme, colorMode] = useMode();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="login-container">
          <div className="login-background"></div>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                {...register('username', { required: true, minLength: 4 })}
              />
              {errors.username && <p className="error-message">Username is required.</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                {...register('password', {
                  required: true,
                  minLength: 8,
                  pattern: {
                    value: passwordRegex,
                  },
                })}
              />
              {errors.password && <p className="error-message">Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.</p>}
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
              <Link to="/Forgot_Password" className="forgot-password-link">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Login;
