import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleAddTask() {
        onAddTask(text);
        setText('');
    }

    return (
        <div>
            <input type="text" value={text} placeholder="Enter task details" onChange={handleTextChange} />
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}
