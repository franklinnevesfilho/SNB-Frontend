import './App.css'
import HomePage from "./pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import LoginPage from './pages/LoginPage.jsx';
import SignUp from './pages/SignUp';
import ForgetPass from './pages/ForgetPass';
import ResetPass from './pages/ResetPass';
import ViewItemPage from './pages/ViewItemPage.jsx';
import Checkout from './pages/Checkout.jsx';
import {useState} from "react";

const API_URL = import.meta.env.VITE_API_URL

function App() {
    const [jwt, setJwt] = useState(localStorage.getItem('JWT') || '')

  //   global call api function that takes in necessary arguments for whatever is needed
    const callAPI = async (path, method, headers, body, callback) => {
        const response = await fetch('http://' + API_URL + path, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        })
        const json = await response.json()
        callback(json)
    }

  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage apiCall={apiCall} jwt={jwt} setJwt={setJwt}/>} />
            <Route path="/signup" element={<SignUp apiCall={apiCall}/>} />
            <Route path="/forgot-password" element={<ForgetPass apiCall={apiCall}/>} />
            {/*A route directing to reset password which a token is passed through the url*/}
            <Route path="/reset-password/:tokenId" element={<ResetPass apiCall={apiCall}/>} />
            <Route path="/confirm-account/:tokenId" element={<ConfirmationPage />} />

            <Route path="/home" element={<HomePage apiCall={apiCall} />} />

            <Route path="/viewItem/:itemId" element={<ViewItemPage />} />

            <Route path="/checkout-cart" element={<Checkout apiCall={apiCall} />} />

            { /* TODO: 404 page */ }
            <Route path={'*'} element={<h1>Page not found</h1>} />

        </Routes>
    </>
  )
}

export default App
