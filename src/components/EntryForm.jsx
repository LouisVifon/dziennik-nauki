import { useState } from "react"

function EntryForm() {
    const [topic, setTopic] = useState("")
    function handleClick() {
        console.log(topic)
    }

    return (
        <div>
            <h2>Nowy wpis</h2>
            <input type="text" placeholder="Temat" value={topic} onChange={e => setTopic(e.target.value)} />
            <button onClick={handleClick}>Dodaj</button>
        </div>
    )    
}

export default EntryForm