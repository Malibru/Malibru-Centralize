// import './sidebarItem.css';
import React from 'react';
import "../main.css";
"use client"

export default function SideBarItem({ item, onClick }) {
  return (
    <li className="sidebar-list-item minimal">
      <button className="sidebar-btn minimal" onClick={() => onClick?.(item)}>
        {item}
      </button>
    </li>
  )
}