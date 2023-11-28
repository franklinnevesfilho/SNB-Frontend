import './App.css'
import HomePage from "./pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import LoginPage from './pages/LoginPage.jsx';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import ResetPass from './pages/ResetPass';
import ViewItemPage from './pages/ViewItemPage.jsx';
import Checkout from './pages/Checkout.jsx';
import {useState} from "react";
import ProfilePage from "./pages/ProfilePage.jsx";
import TwoAuthPage from "./pages/TwoAuthPage.jsx";

const API_URL = import.meta.env.VITE_API_URL

function App() {
    const apiCall = async (path, method, headers, body, callback, rejected) => {

        let response = '';
        if (method === 'GET') {
            response = await fetch('http://' + API_URL + path, {
                method: method,
                headers: headers
            }).catch(rejected)
        }else if(method === 'POST') {
            response = await fetch('http://' + API_URL + path, {
                    method: method,
                    headers: headers,
                    body: JSON.stringify(body)
                }).catch(rejected)
        }

        const json = await response.json()
        callback(json)
    }

  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage apiCall={apiCall}/>} />
            <Route path="/signup" element={<SignUp apiCall={apiCall}/>} />
            <Route path="/forgot-password" element={<ForgotPass apiCall={apiCall}/>} />
            {/*A route directing to reset password which a token is passed through the url*/}
            <Route path="/reset-password/:userId" element={<ResetPass apiCall={apiCall}/>} />
            <Route path="/confirm-account/:tokenId" element={<ConfirmationPage />} />

            <Route path="/home" element={<HomePage apiCall={apiCall} />} />

            <Route path="/viewItem/:itemId" element={<ViewItemPage apiCall={apiCall}/>} />

            <Route path="/checkout-cart" element={<Checkout apiCall={apiCall} />} />
            <Route path="/profile" element={<ProfilePage apiCall={apiCall} />} />
            <Route path="/two-factor-auth" element={<TwoAuthPage apiCall={apiCall} />} />

            { /* TODO: 404 page */ }
            <Route path={'*'} element={<h1>Page not found</h1>} />

        </Routes>
    </>
  )
}

export default App
