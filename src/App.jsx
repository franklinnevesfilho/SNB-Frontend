import './App.css'
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import {Route, Routes} from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";

const API_URL = import.meta.env.VITE_API_URL

function App() {

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
            {/*a route with an empty path that contains LoginPage component that uses the function callAPI*/}
            <Route path="/" element={<LoginPage apiCall={callAPI}/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/confirm-account/:tokenId" element={<ConfirmationPage />} />
            { /* TODO: 404 page */ }
            <Route path={'*'} element={<h1>Page not found</h1>} />
        </Routes>
    </>
  )
}

export default App
