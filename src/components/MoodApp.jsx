import {useState, useEffect} from "react";
import {useTheme} from "./ThemeContext";
import Switch from "./Switch";
import MoodList from "./MoodList";
import MoodForm from "./MoodForm";

function MoodApp() {
    const [entries, setEntries] = useState(() => JSON.parse(localStorage.getItem("entries")) || []);

    const [note, setNote] = useState("");
    const [mood, setMood] = useState("😊");
    const [energy, setEnergy] = useState(3);
    

    const {theme} = useTheme();

    function addEntry() {
         setEntries([...entries, { 
            id: Date.now(), 
            mood: mood, 
            note: note, 
            energy: energy, 
            date: new Date().toLocaleDateString()
             }]);
        setNote("");
        setMood("😊");
        setEnergy(3);
    }

    function deleteEntry(id) {
           setEntries(entries.filter(entry => entry.id !== id));

    }

    useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#242424" : "#ffffff";
    }, [theme]);

    useEffect(() => localStorage.setItem("entries", JSON.stringify(entries)), [entries])

    return (
        <div className={theme}>
            <h1>Mood Tracker</h1>
            <p><Switch />Toggle Dark Mode or Light Mode</p>
            <MoodForm 
            note={note} 
            mood={mood}
            energy={energy}
            onNoteChange={e => setNote(e.target.value)}
            onMoodChange={emoji => setMood(emoji)}
            onEnergyChange={e => setEnergy(e.target.value)}
            onSubmit={addEntry}             />
            <MoodList 
            entries={entries}
            onDelete={deleteEntry}/>
        </div>
    )
}

export default MoodApp;