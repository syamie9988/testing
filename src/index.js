import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Masterlist from './pages/mainpage/Operations/Masterlist';
import General from './pages/mainpage/Accounts/Attendance/General';
import NormalRestDay from './pages/mainpage/Accounts/Attendance/Normal_Rest_Day';
import Daily from './pages/mainpage/Accounts/Attendance/daily';
import PublicLateness from './pages/mainpage/Accounts/Attendance/Public_Lateness';
import Additional from './pages/mainpage/Accounts/Attendance/Additional';
import CustomerBill from './pages/mainpage/Accounts/Billing/Customer_Bill';
import RestDay from './pages/mainpage/Accounts/Billing/Rest_Day';
import LateLeave from './pages/mainpage/Accounts/Billing/Late_Leave';
import Addition from './pages/mainpage/Accounts/Billing/Addition';
import Deduction from './pages/mainpage/Accounts/Billing/Deduction';
import ForgotPassword from './pages/login/Forgot_Password';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Masterlist" element={<Masterlist />} />
        <Route path="/General" element={<General />} />
        <Route path="/NormalRestDay" element={<NormalRestDay />} />
        <Route path="/Daily" element={<Daily />} />
        <Route path="/PublicLateness" element={<PublicLateness />} />
        <Route path="/Additional" element={<Additional />} />
        <Route path="/CustomerBill" element={<CustomerBill />} />
        <Route path="/RestDay" element={<RestDay />} />
        <Route path="/LateLeave" element={<LateLeave />} />
        <Route path="/Addition" element={<Addition />} />
        <Route path="/Deduction" element={<Deduction />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
