import { useState } from "react"

function EntryForm({ onAdd }) {
    const [topic, setTopic] = useState("")
    const [category, setCategory] = useState("react")
    const [notes, setNotes] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (topic.trim() === "") return

        onAdd({
            id: crypto.randomUUID(),
            date: new Date().toLocaleDateString("pl-PL"),
            topic: topic.trim(),
            category,
            notes: notes.trim()
        })

        setTopic("")
        setCategory("react")
        setNotes("")
    }

    return (
        <form className="card p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
            <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wide">Nowy wpis</h2>
            <label htmlFor="topic" className="sr-only">Temat</label>
            <input id="topic" className="input-field" type="text" placeholder="Temat" value={topic} onChange={e => setTopic(e.target.value)} />
            <label htmlFor="category" className="sr-only">Kategoria</label>
            <select id="category" className="input-field" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="tailwind">Tailwind</option>
                <option value="git">Git</option>
                <option value="other">Inne</option>
            </select>
            <label htmlFor="notes" className="sr-only">Notatki</label>
            <textarea id="notes" className="input-field resize-none h-24" placeholder="Notatki" value={notes} onChange={e => setNotes(e.target.value)}/>
            <button type="submit" className="bg-blue-600 text-white font-medium rounded-lg px-4 py-2 w-full transition-colors hover:bg-blue-500 disabled:bg-blue-900 disabled:text-gray-400 disabled:cursor-not-allowed" disabled={topic.trim() === ""}>Dodaj</button>
        </form>
    )
}

export default EntryForm