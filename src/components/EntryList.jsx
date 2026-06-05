function EntryList({ entries, onDelete }) {
    if (entries.length === 0) {
        return (
            <p>Brak wpisów.</p>
        )
    }
    
    return (
        <div>
            {entries.map(entry => (
                <div key={entry.id}>
                    <p>{entry.topic}</p>
                    <p>{entry.date}</p>
                    <button onClick={() => onDelete(entry.id)}>Usuń</button>
                </div>
            ))}
        </div>
    )
}

export default EntryList