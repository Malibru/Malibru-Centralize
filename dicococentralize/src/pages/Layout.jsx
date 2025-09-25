import React from "react";
import Header from '../components/header.jsx';
import Rotas from "../routes/routes.jsx";
import { BrowserRouter } from "react-router-dom";



export default function Layout(){

    return(
        <>
               
                    <Header/>
                    <Rotas/>
               
        </>
    )
}

