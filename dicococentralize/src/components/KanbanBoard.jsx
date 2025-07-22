import React from 'react'
import KanbanColumn from "./KanbanColumn"
"use client"
// import './kanbanboard.css'


export default function KanbanBoard({
  columns,
  tasks,
  editId,
  editText,
  onEditTextChange,
  onMoveTask,
  onEditTask,
  onSaveEdit,
  onCancelEdit,
  onRemoveTask,
}) {
  return (
    <main className="kanban-board minimal">
      {columns.map((column, idx) => (
        <KanbanColumn
          key={column.title}
          column={column}
          columnIndex={idx}
          totalColumns={columns.length}
          tasks={tasks}
          editId={editId}
          editText={editText}
          onEditTextChange={onEditTextChange}
          onMoveTask={onMoveTask}
          onEditTask={onEditTask}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </main>
  )
}
