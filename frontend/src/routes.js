import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Login from "./Components/auth/login/Login";
import ForgotPassword from "./Components/auth/forgot-password/ForgotPassword";
import Home from "./Components/Home/home";
import Summary from './Components/Home/Summary';
import Admin from './Components/Home/Admin';
import AddAppartment from './Components/add-apprtment/AddAppartment';
import AddRecipient from './Components/add-recipient/Add-recipient';
const Router = () => {
  return (
      <Routes>
      <Route path="" element={<Login/>}></Route>
      <Route path="/auth/forgot-password" exact element={<ForgotPassword/>}></Route>
      <Route path="/home" exact element={<Home/>}>
        <Route path="/home/summary" exact element={<Summary/>}></Route>
        <Route path="/home/admin" exact element={<Admin/>}></Route>
        <Route path='/home/admin/add-apartment' exact element={<AddAppartment/>}></Route>
        <Route path='/home/admin/add-recipient' exact element={<AddRecipient/>}></Route>
      </Route>
      </Routes>
  )
}

export default Router