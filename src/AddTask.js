import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleAddTask() {
        if (text === '') {
            setError('Please enter task details');
        } else {
            setText(() => '');
            setError(() => '');
            onAddTask(text);
        }
    }

    return (
        <div>
            <input type="text" value={text} placeholder="Enter task details" onChange={handleTextChange} />
            <button onClick={handleAddTask}>Add</button>
            {error !== '' && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
