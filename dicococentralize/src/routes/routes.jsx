import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";   
import XmlComprasPage from "../pages/XmlCompras.jsx";
import LicencasPage from "../pages/LicencasPage.jsx";
import ImporteCtePage from "../pages/ImporCtePage.jsx";
import ImporteNfePage from "../pages/ImportNfePage.jsx";   
import AwsPage from "../pages/AwsPage.jsx";
import AutomacaoPowerBIPage from "../pages/AutomacaoBIPage.jsx";




export default function Routes({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/xml-compras" component={XmlComprasPage} />
        <Route path="/licencas" component={LicencasPage} />
        <Route path="/importe-cte" component={ImporteCtePage} />
        <Route path="/importe-nfe" component={ImporteNfePage} />
        <Route path="/aws" component={AwsPage} />
        <Route path="/automacao-power-bi" component={AutomacaoPowerBIPage} />
       
      </Switch>
    </Router>
  );
}