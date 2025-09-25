import React, { useState, useEffect } from "react"

export default function LicencasPage() {
  const [email, setEmail] = useState("")
  const [vencimento, setVencimento] = useState("")
  const [licencas, setLicencas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [editId, setEditId] = useState(null)
  const [editEmail, setEditEmail] = useState("")
  const [editVencimento, setEditVencimento] = useState("")

 
  const API_URL = ""

  useEffect(() => {
    async function fetchLicencas() {
      setLoading(true)
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setLicencas(data)
      } catch (err) {
        setError("Erro ao buscar licenças")
      }
      setLoading(false)
    }
    fetchLicencas()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    if (!email || !vencimento) {
      setError("Preencha todos os campos")
      return
    }
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, vencimento }),
      })
      if (!res.ok) throw new Error()
      const novaLicenca = await res.json()
      setLicencas([...licencas, novaLicenca])
      setEmail("")
      setVencimento("")
    } catch {
      setError("Erro ao adicionar licença")
    }
  }

  async function handleDelete(id) {
    setError("")
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error()
      setLicencas(licencas.filter(l => l.id !== id))
    } catch {
      setError("Erro ao deletar licença")
    }
  }

  function startEdit(lic) {
    setEditId(lic.id)
    setEditEmail(lic.email)
    setEditVencimento(lic.vencimento)
  }

  function cancelEdit() {
    setEditId(null)
    setEditEmail("")
    setEditVencimento("")
  }

  async function handleUpdate(e) {
    e.preventDefault()
    setError("")
    try {
      const res = await fetch(``, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: editEmail, vencimento: editVencimento }),
      })
      if (!res.ok) throw new Error()
      const updated = await res.json()
      setLicencas(licencas.map(l => (l.email === editEmail ? updated : l)))
      cancelEdit()
    } catch {
      setError("Erro ao atualizar licença")
    }
  }

  return (
    <div>
      <h2>Controle de Licenças do Office</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email da Conta:&nbsp;
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>Data de Vencimento:&nbsp;
            <input
              type="date"
              value={vencimento}
              onChange={e => setVencimento(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Adicionar Licença</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <hr />
      <h3>Licenças Cadastradas</h3>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <ul>
          {licencas.map((lic) =>
            editId === lic.id ? (
              <li key={lic.id}>
                <form onSubmit={handleUpdate} style={{ display: "inline" }}>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={e => setEditEmail(e.target.value)}
                    required
                  />
                  <input
                    type="date"
                    value={editVencimento}
                    onChange={e => setEditVencimento(e.target.value)}
                    required
                  />
                  <button type="submit">Salvar</button>
                  <button type="button" onClick={cancelEdit}>Cancelar</button>
                </form>
              </li>
            ) : (
              <li key={lic.id}>
                {lic.email} - Vence em: {lic.vencimento}
                <button onClick={() => startEdit(lic)} style={{ marginLeft: 8 }}>Editar</button>
                <button onClick={() => handleDelete(lic.id)} style={{ marginLeft: 4, color: "red" }}>Deletar</button>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  )
}
