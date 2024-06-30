import { useState } from "react";
import AddTask from "./AddTask";
import SaveTasks from "./SaveTasks";
import TaskList from "./TaskList";

let nextTaskId = 1;

export default function TaskApp() {
    const [tasks, setTasks] = useState([]);

    function handleAddTask(text) {
        const updatedTasks = [
            ...tasks,
            {
                id: nextTaskId++,
                text: text,
                completed: false
            }
        ];
        setTasks(updatedTasks);
    }

    function handleDeleteTask(taskToBeDeleted) {
        const updatedTasks = tasks.filter(task => task.id !== taskToBeDeleted.id);
        setTasks(updatedTasks);
    }



    function handleUpdateTask(taskToBeUpdated) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskToBeUpdated.id) {
                return {
                    ...task,
                    text: taskToBeUpdated.text,
                    completed: taskToBeUpdated.completed
                };
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
    }

    function handleClearTasks() {
        setTasks([]);
    }

    function handleSaveTasks() {
        alert(JSON.stringify(tasks));
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
