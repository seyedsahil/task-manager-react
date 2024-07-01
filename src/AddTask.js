import { useContext, useState } from "react";
import { TaskDispatchContext } from "./TasksContext";

let nextTaskId = 1;

export default function AddTask() {
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const dispatch = useContext(TaskDispatchContext);

    function handleTextChange(event) {
        const value = event.target.value;
        if (value !== '') {
            setError(() => '');
        }
        setText(() => value);
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
        <>
        {error !== '' && <div className="alert alert-danger">{error}</div>}
        <div className="input-group mb-3">
            <input type="text" className="form-control task-input" value={text} placeholder="Enter task details" onChange={handleTextChange} />
            <div className="input-group-append">
                <button className="btn btn-info task-btn" onClick={handleAddTask}>Add</button>
            </div>
        </div>
        </>
    );
}
