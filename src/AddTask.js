import { useContext, useState } from "react";
import { TaskDispatchContext } from "./TasksContext";

let nextTaskId = 1;

export default function AddTask() {
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const dispatch = useContext(TaskDispatchContext);

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleAddTask() {
        if (text === '') {
            setError('Please enter task details');
        } else {
            setText(() => '');
            setError(() => '');
            dispatch({
                type: 'add_task',
                id: nextTaskId++,
                text: text,
                completed: false
            });
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
