import './App.css'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import ResetPass from './pages/ResetPass';
import ViewItem from './pages/ViewItem.jsx';
import Checkout from './pages/Checkout.jsx';
import Profile from "./pages/Profile.jsx";
import TwoAuth from "./pages/TwoAuth.jsx";
import AccountConfirmation from "./pages/AccountConfirmation.jsx";

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
            <Route path="/" element={<Login apiCall={apiCall}/>} />
            <Route path="/signup" element={<SignUp apiCall={apiCall}/>} />
            <Route path="/forgot-password" element={<ForgotPass apiCall={apiCall}/>} />
            {/*A route directing to reset password which a token is passed through the url*/}
            <Route path="/reset-password/:userId" element={<ResetPass apiCall={apiCall}/>} />
            {/*<Route path="/confirm-account/:tokenId" element={<ConfirmationPage />} />*/}

            <Route path="/home" element={<Home apiCall={apiCall} />} />

            <Route path="/viewItem/:itemId" element={<ViewItem apiCall={apiCall}/>} />

            <Route path="/checkout-cart" element={<Checkout apiCall={apiCall} />} />
            <Route path="/profile" element={<Profile apiCall={apiCall} />} />
            <Route path="/two-factor-auth" element={<TwoAuth apiCall={apiCall} />} />
            <Route path={"/confirm-account/:id"} element={<AccountConfirmation apiCall={apiCall} />} />

            { /* TODO: 404 page */ }
            <Route path={'*'} element={<h1>Page not found</h1>} />

        </Routes>
    </>
  )
}

export default App
