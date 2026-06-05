const CATEGORY_STYLES = {
    react: { label: "React", badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" },
    javascript: { label: "JavaScript", badge: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30" },
    css: { label: "CSS", badge: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
    tailwind: { label: "Tailwind", badge: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
    git: { label: "Git", badge: "bg-orange-500/15 text-orange-300 border-orange-500/30" },
    other: { label: "Inne", badge: "bg-gray-500/15 text-gray-300 border-gray-500/30" },
}

function EntryList({ entries, onDelete }) {
    if (entries.length === 0) {
        return (
            <div className="border border-dashed border-gray-700 rounded-xl p-8 text-center text-gray-400">
                <p className="font-medium text-gray-300">Brak wpisów</p>
                <p className="text-sm mt-1">Dodaj swój pierwszy wpis powyżej.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {entries.map(entry => {
                const category = CATEGORY_STYLES[entry.category] ?? CATEGORY_STYLES.other
                return (
                    <div className="card p-4 transition-colors hover:border-gray-600" key={entry.id}>
                        <div className="flex justify-between items-start gap-3">
                            <div className="flex items-center gap-2 min-w-0">
                                <p className="text-gray-100 font-medium truncate">{entry.topic}</p>
                                <span className={`inline-flex shrink-0 text-xs px-2 py-0.5 rounded-full border ${category.badge}`}>
                                    {category.label}
                                </span>
                            </div>
                            <button className="shrink-0 bg-red-500 text-white text-xs rounded-lg px-2 py-1 transition-colors hover:bg-red-600" onClick={() => onDelete(entry.id)}>Usuń</button>
                        </div>
                        {entry.notes && <p className="text-sm text-gray-400 mt-2 whitespace-pre-wrap">{entry.notes}</p>}
                        <p className="text-xs text-gray-500 mt-2">{entry.date}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default EntryList
