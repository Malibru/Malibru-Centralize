import React from "react";
import "../main.css";
"use client"
export default function AddTaskForm({ newTaskText, onNewTaskTextChange, onAddTask }) {
  return (
    <form onSubmit={onAddTask} className="add-task-form">
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => onNewTaskTextChange(e.target.value)}
        placeholder="Nova tarefa..."
        className="add-task-input"
      />
      <button type="submit" className="add-task-btn">
        Adicionar
      </button>
    </form>
  )
}

