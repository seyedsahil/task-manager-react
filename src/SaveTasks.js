import { useContext } from "react";
import { TaskDispatchContext, TasksContext } from "./TasksContext";

export default function SaveTasks() {
    const dispatch = useContext(TaskDispatchContext);
    const tasks = useContext(TasksContext);

    function handleSaveTasks() {
        dispatch({
            type: 'save_tasks',
            tasksToBeSaved: tasks
        });
    }

    function handleClearTasks() {
        dispatch({
            type: 'clear_tasks'
        });
    }
    
    return (
        <div className="input-group mb-3">
            <button onClick={handleSaveTasks} className="btn btn-success task-btn">Save</button>
            <button onClick={handleClearTasks} className="btn btn-danger task-btn">Clear</button>
        </div>
    );
}
