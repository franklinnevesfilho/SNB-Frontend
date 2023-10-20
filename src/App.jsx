import './App.css'
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import {Route, Router, Routes} from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";


function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/confirm-account/:tokenId" element={<ConfirmationPage />} />
            { /* TODO: 404 page */ }
            <Route path={'*'} element={<h1>Page not found</h1>} />
        </Routes>
    </>
  )
}

export default App
