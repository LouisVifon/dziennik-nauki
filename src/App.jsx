import useLocalStorage from "./hooks/useLocalStorage"
import EntryForm from "./components/EntryForm"
import EntryList from "./components/EntryList"

function pluralWpisy(n) {
  if (n === 1) return "wpis"
  const last = n % 10
  const lastTwo = n % 100
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return "wpisy"
  return "wpisów"
}

function App() {
  const [entries, setEntries] = useLocalStorage("dziennik-entries", [])
  function handleAddEntry(entry) {
    setEntries(value => [...value, entry])
  }
  function handleDeleteEntry(id) {
    setEntries(value => value.filter(entry => entry.id !== id))
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-100">Dziennik nauki</h1>
          <p className="text-sm text-gray-400 mt-1">
            Zapisuj czego się uczysz{entries.length > 0 && ` · ${entries.length} ${pluralWpisy(entries.length)}`}
          </p>
        </header>
        <div className="space-y-8">
          <EntryForm onAdd={handleAddEntry} />
          <EntryList entries={entries} onDelete={handleDeleteEntry}/>
        </div>
      </div>
    </div>
  )
}

export default App