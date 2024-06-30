import { useContext, useState } from "react";
import { TaskDispatchContext } from "./TasksContext";

export default function Task({ task }) {
    const [editMode, setEditMode] = useState(false);
    const [updatedText, setUpdatedText] = useState(task.text);
    const [error, setError] = useState('');
    const dispatch = useContext(TaskDispatchContext);

    function handleDeleteTask() {
        dispatch({
            type: 'delete_task',
            taskToBeDeleted: task
        });
    }

    function handleEditTask() {
        setEditMode(true);
    }

    function handleCancelTask() {
        setEditMode(() => false);
        setUpdatedText(() => task.text);
        setError(() => '');
    }

    function handleChangeUpdatedText(event) {
        setUpdatedText(event.target.value);
    }

    function handleUpdateTask() {
        if (updatedText === '') {
            setError('Please enter task details');
        } else {
            const taskWithUpdates = {
                ...task,
                text: updatedText
            };
            setEditMode(() => false);
            setError(() => '');
            dispatch({
                type: 'update_task',
                taskToBeUpdated: taskWithUpdates
            });
        }
    }

    function handleMarkAsCompleted() {
        const completedTask = {
            ...task,
            completed: true
        };
        setError('');
        dispatch({
            type: 'update_task',
            taskToBeUpdated: completedTask
        });
    }

    if (task.completed) {
        return (
            <>
                <s>{task.text}</s>
                <button onClick={handleDeleteTask}>Delete</button>
            </>
        );
    } else {
        if (editMode) {
            return (
                <>
                    <input type="text" value={updatedText} placeholder="Enter task details" onChange={handleChangeUpdatedText} />
                    {error !== '' && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={handleUpdateTask}>Update</button>
                    <button onClick={handleCancelTask}>Cancel</button>
                </>
            );
        } else {
            return (
                <>
                    <input type="checkbox" checked={task.completed} onChange={handleMarkAsCompleted} />
                    {task.text}
                    <button onClick={handleEditTask}>Edit</button>
                    <button onClick={handleDeleteTask}>Delete</button>
                </>
            );
        }
    }
}
