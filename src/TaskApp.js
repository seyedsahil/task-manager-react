import { useReducer } from "react";
import AddTask from "./AddTask";
import SaveTasks from "./SaveTasks";
import TaskList from "./TaskList";
import { tasksReducer } from "./tasks-reducer"

let nextTaskId = 1;

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    function handleAddTask(text) {
        dispatch({
            type: 'add_task',
            id: nextTaskId++,
            text: text,
            completed: false
        });
    }

    function handleDeleteTask(taskToBeDeleted) {
        dispatch({
            type: 'delete_task',
            taskToBeDeleted: taskToBeDeleted
        });
    }

    function handleUpdateTask(taskToBeUpdated) {
        dispatch({
            type: 'update_task',
            taskToBeUpdated: taskToBeUpdated
        });
    }

    function handleClearTasks() {
        dispatch({
            type: 'clear_tasks'
        });
    }

    function handleSaveTasks() {
        dispatch({
            type: 'save_tasks',
            tasksToBeSaved: tasks
        });
    }

    return (
        <>
            <h1>Task Manager</h1>
            <AddTask onAddTask={handleAddTask} />
            {tasks.length !== 0 && <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />}
            {tasks.length !== 0 && <SaveTasks onClearTasks={handleClearTasks} onSaveTasks={handleSaveTasks} />}
        </>
    );
}
