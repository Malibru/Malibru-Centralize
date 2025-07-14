import React from "react"
import "../main.css"
import Sidebar from "./sidebar.jsx"
import KanbanBoard from "./kanbanboard.jsx"
import AddTaskForm from "./addtaskform.jsx"
import useKanban from "../hooks/useKanBan.jsx"

const sidebarItems = [
  "Importe Cte",
  "Importe Nfe",
  "AWS",
  "XML Compras",
  "Automação Power BI",
  "Controle de Chamados",
  "Abrir um Chamado",
  "Controle de Licenças do Office",
]

export default function MainContent() {
  const {
    tasks,
    newTaskText,
    setNewTaskText,
    editId,
    editText,
    setEditText,
    moveTask,
    addTask,
    removeTask,
    startEditTask,
    saveEditTask,
    cancelEditTask,
    kanbanColumns,
  } = useKanban()

  function handleSidebarItemClick(item) {
    console.log(`Clicked on: ${item}`)
   
  }

  return (
    <div className="main-container minimal">
      <Sidebar items={sidebarItems} onItemClick={handleSidebarItemClick} />

      <div className="kanban-container">
        <KanbanBoard
          columns={kanbanColumns}
          tasks={tasks}
          editId={editId}
          editText={editText}
          onEditTextChange={setEditText}
          onMoveTask={moveTask}
          onEditTask={startEditTask}
          onSaveEdit={saveEditTask}
          onCancelEdit={cancelEditTask}
          onRemoveTask={removeTask}
        />

        <AddTaskForm newTaskText={newTaskText} onNewTaskTextChange={setNewTaskText} onAddTask={addTask} />
      </div>
    </div>
  )
}
