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
        <div>
            <h2>Nowy wpis</h2>
            <input type="text" placeholder="Temat" value={topic} onChange={e => setTopic(e.target.value)} />
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="tailwind">Tailwind</option>
                <option value="git">Git</option>
                <option value="other">Inne</option>
            </select>
            <textarea placeholder="Notatki" value={notes} onChange={e => setNotes(e.target.value)}/>
            <button onClick={handleClick}>Dodaj</button>
        </div>
    )
}

export default EntryForm