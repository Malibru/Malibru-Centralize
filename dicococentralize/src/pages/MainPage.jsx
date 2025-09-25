import React from "react";

import Sidebar from "../components/sidebar";
import KanbanBoard from "../components/kanbanboard";
import "../main.css"; 
export default function MainPage() {
  return (
    <>
      <Sidebar />
      <KanbanBoard />
    </>
  );
}