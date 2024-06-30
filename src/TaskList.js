import Task from "./Task";

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
    return (
        <div>
            <ul>
                {
                    tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <Task task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
