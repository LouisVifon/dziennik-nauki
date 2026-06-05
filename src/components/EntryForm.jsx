import { useState } from "react"

function EntryForm({ onAdd }) {
    const [topic, setTopic] = useState("")
    const [category, setCategory] = useState("react")
    const [notes, setNotes] = useState("")
    function handleClick() {
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
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-sm text-gray-500">Nowy wpis</h2>
            <input className="border border-gray-200 rounded-lg px-3 py-2 w-full" type="text" placeholder="Temat" value={topic} onChange={e => setTopic(e.target.value)} />
            <select className="border border-gray-200 rounded-lg px-3 py-2 w-full" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="tailwind">Tailwind</option>
                <option value="git">Git</option>
                <option value="other">Inne</option>
            </select>
            <textarea className="border border-gray-200 rounded-lg px-3 py-2 w-full resize-none h-24" placeholder="Notatki" value={notes} onChange={e => setNotes(e.target.value)}/>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2" onClick={handleClick}>Dodaj</button>
        </div>
    )
}

export default EntryForm