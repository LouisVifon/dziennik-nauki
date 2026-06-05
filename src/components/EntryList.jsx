function EntryList({ entries, onDelete }) {
    if (entries.length === 0) {
        return (
            <p className="text-sm text-gray-500 p-4">Brak wpisów.</p>
        )
    }
    
    return (
        <div className="flex flex-col gap-3">
            {entries.map(entry => (
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center" key={entry.id}>
                    <p className="text-gray-800 font-medium">{entry.topic}</p>
                    <p className="text-sm text-gray-400">{entry.date}</p>
                    <button className="bg-red-400 text-white text-sm rounded-lg px-2 py-1" onClick={() => onDelete(entry.id)}>Usuń</button>
                </div>
            ))}
        </div>
    )
}

export default EntryList