import { useState } from "react"

function EntryForm({ onAdd }) {
    const [topic, setTopic] = useState("")
    const [category, setCategory] = useState("react")
    const [notes, setNotes] = useState("")
    const [error, setError] = useState("")
    function handleClick() {
        if (topic.trim() === "") {
            setError("Temat jest wymagany.")
            return
        }

        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString("pl-PL"),
            topic: topic,
            category: category,
            notes: notes
        }
        onAdd(newEntry)

        setTopic("")
        setCategory("react")
        setNotes("")
        setError("")
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-sm text-gray-400">Nowy wpis</h2>
            <input className="bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-3 py-2 w-full" type="text" placeholder="Temat" value={topic} onChange={e => setTopic(e.target.value)} />
            <select className="bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-3 py-2 w-full" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="tailwind">Tailwind</option>
                <option value="git">Git</option>
                <option value="other">Inne</option>
            </select>
            <textarea className="bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-3 py-2 w-full resize-none h-24" placeholder="Notatki" value={notes} onChange={e => setNotes(e.target.value)}/>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500 disabled:bg-blue-900 disabled:text-gray-400 disabled:cursor-not-allowed" onClick={handleClick} disabled={topic.trim() === ""}>Dodaj</button>
        </div>
    )
}

export default EntryForm