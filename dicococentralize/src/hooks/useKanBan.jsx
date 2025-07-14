import React from 'react'
import kanbanColumn from "../components/KanbanColumn"
// import './kanbanboard.css'  

"use client"

import { useState } from "react"

const initialTasks = [
  { id: 1, text: "Tarefa exemplo 1", status: "A Fazer" },
  { id: 2, text: "Tarefa exemplo 2", status: "A Fazer" },
  { id: 3, text: "Tarefa exemplo 3", status: "Em Progresso" },
  { id: 4, text: "Tarefa exemplo 4", status: "Concluído" },
]

const kanbanColumns = [{ title: "A Fazer" }, { title: "Em Progresso" }, { title: "Concluído" }]

export default function useKanban() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTaskText, setNewTaskText] = useState("")
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  function moveTask(id, direction) {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id !== id) return task
        const colIndex = kanbanColumns.findIndex((c) => c.title === task.status)
        const newIndex = direction === "forward" ? colIndex + 1 : colIndex - 1
        if (newIndex < 0 || newIndex >= kanbanColumns.length) return task
        return { ...task, status: kanbanColumns[newIndex].title }
      }),
    )
  }

  function addTask(e) {
    e.preventDefault()
    if (!newTaskText.trim()) return
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTaskText,
        status: "A Fazer",
      },
    ])
    setNewTaskText("")
  }

  function removeTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  function startEditTask(id, text) {
    setEditId(id)
    setEditText(text)
  }

  function saveEditTask(id) {
    setTasks((tasks) => tasks.map((task) => (task.id === id ? { ...task, text: editText } : task)))
    setEditId(null)
    setEditText("")
  }

  function cancelEditTask() {
    setEditId(null)
    setEditText("")
  }

  return {
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
  }
}