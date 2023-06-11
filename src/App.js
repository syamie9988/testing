import React from 'react';
import Login from './pages/login/Login';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Masterlist from "./pages/mainpage/Operations/Masterlist";
import General from "./pages/mainpage/Accounts/Attendance/General";
import Normal_Rest_Day from "./pages/mainpage/Accounts/Attendance/Normal_Rest_Day";
import Daily from "./pages/mainpage/Accounts/Attendance/daily";
import Public_Lateness from "./pages/mainpage/Accounts/Attendance/Public_Lateness";
import Additional from "./pages/mainpage/Accounts/Attendance/Additional";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theme";
import Customer_Bill from "./pages/mainpage/Accounts/Billing/Customer_Bill";
import Rest_Day from "./pages/mainpage/Accounts/Billing/Rest_Day";
import Late_Leave from "./pages/mainpage/Accounts/Billing/Late_Leave";
import Addition from "./pages/mainpage/Accounts/Billing/Addition";
import Deduction from "./pages/mainpage/Accounts/Billing/Deduction";
import Forgot_Password from "./pages/login/Forgot_Password";


function App() {

   

  const [theme, colorMode] = useMode();
  


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Login />


        

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;