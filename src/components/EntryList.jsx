function EntryList({ entries }) {
    return (
        <div>
            {entries.map(entry => (
                <div key={entry.id}>
                    <p>{entry.topic}</p>
                    <p>{entry.date}</p>
                </div>
            ))}
        </div>
    )
}

export default EntryList