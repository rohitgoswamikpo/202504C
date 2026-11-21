import React from 'react'
import {  Routes, Route } from "react-router";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import DashboardLayout from './Layout/DashboardLayout';
import Dashboardcontact from './Pages/Dashboard/Dashboardcontact';
import DashboardCounter from './Pages/Dashboard/DashboardCounter';

const App = () => {
  return (
    <>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Dashboard" element={<DashboardLayout/>}>
     <Route index element={<DashboardHome/>} />
      <Route path="contact" element={<Dashboardcontact/>} />
      <Route path="Counter" element={<DashboardCounter/>} />
      </Route>
    </Routes>
    </>

  )
}

export default App
