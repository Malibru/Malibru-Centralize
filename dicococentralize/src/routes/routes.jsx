import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage.jsx';   
import XmlComprasPage from "../pages/XmlCompras.jsx";
import LicencasPage from "../pages/LicencasPage.jsx";
import ImporteCtePage from "../pages/ImporCtePage.jsx";
import ImporteNfePage from "../pages/ImportNfePage.jsx";   
import AwsPage from "../pages/AwsPage.jsx";
import AutomacaoPowerBIPage from "../pages/AutomacaoBIPage.jsx";
import"../assets/css/incialpage.css";
import"../assets/css/header.css";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/home" element={<MainPage />} />
      <Route path="/licencas" element={<LicencasPage />} />
      <Route path="/xml-compras" element={<XmlComprasPage />} />
      <Route path="/import-cte" element={<ImporteCtePage />} />
      <Route path="/import-nfe" element={<ImporteNfePage />} />
      <Route path="/aws" element={<AwsPage />} />
      <Route path="/automacao-bi" element={<AutomacaoPowerBIPage />} />
    </Routes>
  );
}