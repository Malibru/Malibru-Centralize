"use client"
import SidebarItem from "./SideBarItem"
import "../main.css";
// import './sidebar.css';
import React from 'react';

export default function Sidebar({ items, onItemClick }) {
  return (
    <aside className="sidebar minimal">
      <ul className="sidebar-list minimal">
        {items.map((item) => (
          <SidebarItem key={item} item={item} onClick={onItemClick} />
        ))}
      </ul>
    </aside>
  )
}
