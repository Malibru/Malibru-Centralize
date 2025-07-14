import "../main.css"
import React from "react"   
// import "./TaskEditForm.css"
import KanbanCard from "./kanbancard.jsx"

export default function KanbanColumn({
  column,
  columnIndex,
  totalColumns,
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
  const columnTasks = tasks.filter((task) => task.status === column.title)

  return (
    <section className={`kanban-column minimal kanban-${column.title.replace(/\s/g, "").toLowerCase()}`}>
      <h2 className="kanban-title minimal">{column.title}</h2>
      <div className="kanban-cards minimal">
        {columnTasks.map((task) => (
          <KanbanCard
            key={task.id}
            task={task}
            columnIndex={columnIndex}
            totalColumns={totalColumns}
            isEditing={editId === task.id}
            editText={editText}
            onEditTextChange={onEditTextChange}
            onMoveTask={onMoveTask}
            onEditTask={onEditTask}
            onSaveEdit={() => onSaveEdit(task.id)}
            onCancelEdit={onCancelEdit}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </section>
  )
}
