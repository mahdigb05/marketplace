import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "use-react-router-breadcrumbs";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>} path={"/"}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
