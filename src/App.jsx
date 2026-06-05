import { useState } from "react"
import EntryForm from "./components/EntryForm"
import EntryList from "./components/EntryList"

function App() {
  const [entries, setEntries] = useState([])
  function handleAddEntry(entry) {
    setEntries(value => [...value, entry])
  }
  function handleDeleteEntry(id) {
    setEntries(value => value.filter(entry => entry.id !== id))
  }

  return (
    <div>
      <h1>Dziennik nauki</h1>
      <EntryForm onAdd={handleAddEntry} />
      <EntryList entries={entries} onDelete={handleDeleteEntry}/>
    </div>
  )
}

export default App