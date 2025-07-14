import React from "react"
import TaskActions from "./TaskActions"
import TaskEditForm from "./TaskEditForm"
import "../main.css"

export default function KanbanCard({
  task,
  columnIndex,
  totalColumns,
  isEditing,
  editText,
  onEditTextChange,
  onMoveTask,
  onEditTask,
  onSaveEdit,
  onCancelEdit,
  onRemoveTask,
}) {
  return (
    <div className="kanban-card minimal">
      {isEditing ? (
        <TaskEditForm
          editText={editText}
          onEditTextChange={onEditTextChange}
          onSave={onSaveEdit}
          onCancel={onCancelEdit}
        />
      ) : (
        <React.Fragment>
          {task.text}
          <TaskActions
            task={task}
            columnIndex={columnIndex}
            totalColumns={totalColumns}
            onMoveTask={onMoveTask}
            onEditTask={onEditTask}
            onRemoveTask={onRemoveTask}
          />
        </React.Fragment>
      )}
    </div>
  )
}
