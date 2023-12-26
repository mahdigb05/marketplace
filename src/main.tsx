import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "use-react-router-breadcrumbs";

createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
            <Routes>
                {/*<Route element={<App/>} path={"/"}></Route>*/}
                <Route element={<App/>} path={"/"}></Route>
            </Routes>
        </BrowserRouter>,
)
