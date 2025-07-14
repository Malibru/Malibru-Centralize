"use client"

import React from "react"
import "../main.css"
export default function TaskEditForm({ editText, onEditTextChange, onSave, onCancel }) {
  return (
    <React.Fragment>
      <input
        type="text"
        value={editText}
        onChange={(e) => onEditTextChange(e.target.value)}
        className="edit-task-input"
      />
      <div className="edit-task-actions">
        <button className="kanban-move-btn minimal" onClick={onSave} title="Salvar" type="button">
          Salvar
        </button>
        <button className="kanban-move-btn minimal" onClick={onCancel} title="Cancelar" type="button">
          Cancelar
        </button>
      </div>
    </React.Fragment>
  )
}