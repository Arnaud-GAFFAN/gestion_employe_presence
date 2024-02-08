import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Connexion from "./components/Connexion";
import ConnectAdmin from "./admin/ConnectAdmin";
import Home from "./admin/Home";
import AddEmployers from "./admin/components/AddEmployers";
import EmployersList from "./admin/EmployersList";

function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={< Connexion/> }></Route>
                    <Route path={"/admin/connexion"} element={< ConnectAdmin/> }></Route>
                    <Route path={"/admin/index"} element={< Home/> }></Route>
                    <Route path={"/admin/addEmployers"} element={< AddEmployers/> }></Route>
                    <Route path={"/admin/employersList"} element={< EmployersList/> }></Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}
export default App;