import "../main.css";    
import React from "react";  
"use client"

export default function TaskActions({ task, columnIndex, totalColumns, onMoveTask, onEditTask, onRemoveTask }) {
  return (
    <div className="kanban-card-actions">
      {columnIndex > 0 && (
        <button
          className="kanban-move-btn minimal"
          onClick={() => onMoveTask(task.id, "back")}
          title="Mover para coluna anterior"
          type="button"
        >
          ◀
        </button>
      )}
      {columnIndex < totalColumns - 1 && (
        <button
          className="kanban-move-btn minimal"
          onClick={() => onMoveTask(task.id, "forward")}
          title="Mover para próxima coluna"
          type="button"
        >
          ▶
        </button>
      )}
      <button
        className="kanban-move-btn minimal"
        onClick={() => onEditTask(task.id, task.text)}
        title="Editar"
        type="button"
      >
        ✎
      </button>
      <button className="kanban-move-btn minimal" onClick={() => onRemoveTask(task.id)} title="Remover" type="button">
        🗑
      </button>
    </div>
  )
}