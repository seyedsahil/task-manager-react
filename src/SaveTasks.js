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
        <div>
            <button onClick={handleSaveTasks}>Save</button>
            <button onClick={handleClearTasks}>Clear</button>
        </div>
    );
}
