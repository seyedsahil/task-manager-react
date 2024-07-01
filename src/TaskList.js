import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./TasksContext";

export default function TaskList() {
    const tasks = useContext(TasksContext);

    return (
        <div>
            <ul>
                {
                    tasks.map(task => {
                        return (
                            <li className="list-group-item task-item" key={task.id}>
                                <Task task={task} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
