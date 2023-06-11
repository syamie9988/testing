import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Customer_Bill from "./pages/mainpage/Accounts/Billing/Customer_Bill";
import Rest_Day from "./pages/mainpage/Accounts/Billing/Rest_Day";
import Late_Leave from "./pages/mainpage/Accounts/Billing/Late_Leave";
import Addition from "./pages/mainpage/Accounts/Billing/Addition";
import Deduction from "./pages/mainpage/Accounts/Billing/Deduction";
import Forgot_Password from "./pages/login/Forgot_Password";
import { useState } from 'react'
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Masterlist from "./pages/mainpage/Operations/Masterlist";
import General from "./pages/mainpage/Accounts/Attendance/General";
import Normal_Rest_Day from "./pages/mainpage/Accounts/Attendance/Normal_Rest_Day";
import Daily from "./pages/mainpage/Accounts/Attendance/daily";
import Public_Lateness from "./pages/mainpage/Accounts/Attendance/Public_Lateness";
import Additional from "./pages/mainpage/Accounts/Attendance/Additional";
import { Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <div className="app">
          
          <Sidebar  />
            <main className="content">
            <Topbar  /> */}
              <Routes>
              <Route path="/Forgot_Password" element={<Forgot_Password />} />
              <Route path="/Masterlist" element={<Masterlist />}  />
                <Route path="/General" element={<General />} />
                <Route path="/Normal_Rest_Day" element={<Normal_Rest_Day />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/Public_Lateness" element={<Public_Lateness />} />
                <Route path="/Additional" element={<Additional />} />
                <Route path="/Customer_Bill" element={<Customer_Bill />} />
                  <Route path="/Rest_Day" element={<Rest_Day />} />
                  <Route path="/Late_Leave" element={<Late_Leave />} />
                  <Route path="/Addition" element={<Addition />} />
                  <Route path="/Deduction" element={<Deduction />} />
              </Routes>
            {/* </main>
          </div> */}
    </BrowserRouter>
  </React.StrictMode>
);



