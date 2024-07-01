import { useContext } from "react";
import { TaskDispatchContext, TasksContext } from "./TasksContext";

export default function LoadTasks() {
    const dispatch = useContext(TaskDispatchContext);
    const tasks = useContext(TasksContext);

    function handleLoadTasks() {
        dispatch({
            type: 'load_tasks'
        });
    }

    function handleUnloadTasks() {
        dispatch({
            type: 'unload_tasks'
        });
    }

    return (
        <div className="input-group mb-3">
            <button onClick={handleLoadTasks} className="btn btn-info task-btn">Load</button>
            <button onClick={handleUnloadTasks} className="btn btn-danger task-btn">Unload</button>
        </div>
    );
}
