import { useContext, useRef, useState } from "react";
import { TaskDispatchContext } from "./TasksContext";

export default function Task({ task }) {
    const taskDetailsRef = useRef(null);
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
        const value = event.target.value;
        if (value !== '') {
            setError(() => false);
        }
        setUpdatedText(() => value);
    }

    function handleUpdateTask() {
        if (updatedText === '') {
            taskDetailsRef.current.focus();
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
            <div className="input-group mb-1">
                <input type="checkbox" className="task-checkbox" checked="checked" disabled="disabled" />
                <input type="text" className="form-control task-input" disabled value={task.text} />
                <div className="input-group-append">
                    <button onClick={handleDeleteTask} className="btn btn-warning task-btn">Delete</button>
                </div>
            </div>
        );
    } else {
        if (editMode) {
            return (
                <>
                    {error !== '' && <div className="alert alert-danger">{error}</div>}
                    <div className="input-group mb-1">
                        <input type="text" className="form-control task-input"  ref={taskDetailsRef} value={updatedText} placeholder="Enter task details" onChange={handleChangeUpdatedText} />
                        <div className="input-group-append">
                            <button onClick={handleUpdateTask} className="btn btn-info task-btn">Update</button>
                            <button onClick={handleCancelTask} className="btn btn-warning task-btn">Cancel</button>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <div className="input-group mb-1">
                    <input type="checkbox" className="task-checkbox" checked={task.completed} onChange={handleMarkAsCompleted} />
                    <input type="text" className="form-control task-input" disabled value={task.text} />
                    <div className="input-group-append">
                        <button onClick={handleEditTask} className="btn btn-info task-btn">Edit</button>
                        <button onClick={handleDeleteTask} className="btn btn-danger task-btn">Delete</button>
                    </div>
                </div>
            );
        }
    }
}
