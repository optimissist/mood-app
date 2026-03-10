function MoodForm({note, mood, energy, onNoteChange, onMoodChange, onEnergyChange, onSubmit}) {
    return (
        <div>
            {["😊", "😢", "😡", "😴", "😎", "😤", "🥰"].map(emoji => (
    <button key={emoji} onClick={() => onMoodChange(emoji)} style={{ border: mood === emoji ? "2px solid black" : "none" }}>{emoji}</button>
))}
            <input type="number" value={energy} onChange={onEnergyChange} />
            <textarea cols="30" rows="5" value={note} onChange={onNoteChange}> </textarea>
            <button type="button" onClick={onSubmit}>Log Mood</button>
        </div>
    )
}

export default MoodForm;