import React from "react";
import Header from "../components/header/header.jsx";
import Sidebar from "../components/sidebar";
import KanbanBoard from "../components/kanbanboard";
import "../main.css"; 
export default function MainPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <KanbanBoard />
    </>
  );
}