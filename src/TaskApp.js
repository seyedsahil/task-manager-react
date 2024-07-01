import { useReducer } from "react";
import AddTask from "./AddTask";
import SaveTasks from "./SaveTasks";
import TaskList from "./TaskList";
import { tasksReducer } from "./tasks-reducer"
import { TaskDispatchContext, TasksContext } from "./TasksContext";
import LoadTasks from "./LoadTasks";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <div className="container card-container">
            <div className="card task-card">
                <div className="card-body">
                    <TasksContext.Provider value={tasks}>
                        <TaskDispatchContext.Provider value={dispatch}>
                            <h2 className="card-title text-center">Task Manager</h2>
                            <AddTask />
                            {tasks.length !== 0 && <TaskList />}
                            {tasks.length !== 0 && <SaveTasks />}
                            {tasks.length === 0 && <LoadTasks />}
                        </TaskDispatchContext.Provider>
                    </TasksContext.Provider>
                </div>
            </div>
        </div>
    );
}
