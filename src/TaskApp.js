import { useReducer } from "react";
import AddTask from "./AddTask";
import SaveTasks from "./SaveTasks";
import TaskList from "./TaskList";
import { tasksReducer } from "./tasks-reducer"
import { TaskDispatchContext, TasksContext } from "./TasksContext";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <>
            <TasksContext.Provider value={tasks}>
                <TaskDispatchContext.Provider value={dispatch}>
                    <h1>Task Manager</h1>
                    <AddTask />
                    {tasks.length !== 0 && <TaskList />}
                    {tasks.length !== 0 && <SaveTasks />}
                </TaskDispatchContext.Provider>
            </TasksContext.Provider>
        </>
    );
}
