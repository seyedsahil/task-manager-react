import { useContext, useRef } from "react";
import Task from "./Task";
import { TaskDispatchContext, TasksContext } from "./TasksContext";

export default function TaskList() {
    const tasks = useContext(TasksContext);
    const dispatch = useContext(TaskDispatchContext);

    function handleRecoverTasks() {
        dispatch({
            type: 'recover_tasks'
        })
    }

    return (
        <div>
            <ul>
                {
                    tasks.filter(task => !task.deleted).map(task => {
                        return (
                            <li className="list-group-item task-item" key={task.id}>
                                <Task task={task} />
                            </li>
                        );
                    })
                }
            </ul>
            <div className="input-group mb-2 justify-content-end">
                <button onClick={handleRecoverTasks} className="btn btn-info info-btn">Recover</button>
            </div>
        </div>
    );
}
