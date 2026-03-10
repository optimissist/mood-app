function MoodCard({mood, note, date, energy, onDelete}) {
    return (
        <div>
            <h2>{mood}</h2>
            <p>{note}</p>
            <p>{date}</p>
            <p>{[1,2,3,4,5].map(n => n <= energy ? "●" : "○").join("")}</p>
            <button type="button" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default MoodCard;