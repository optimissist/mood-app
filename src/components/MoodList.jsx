import MoodCard from "./MoodCard";

function MoodList({entries, onDelete}) {
    const moodCounts = entries.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
}, {});

const mostCommon = entries.length > 0 ? Object.keys(moodCounts).reduce((a, b) => 
    moodCounts[a] > moodCounts[b] ? a : b
) : null;

    return (
    <div>
         {entries.map(entry => (
        <MoodCard
          key={entry.id}
          mood={entry.mood}
          note={entry.note}
          date={entry.date}
          energy={entry.energy}
          onDelete={() => onDelete(entry.id)}
        />
      ))}
      <p>{entries.length === 0 && "No entries yet!"}</p>
      {entries.length > 0 && <p>Most common mood this week: {mostCommon}</p>}
    </div>
    )
}

export default MoodList;