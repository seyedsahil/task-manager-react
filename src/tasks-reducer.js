
export function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add_task': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        }
        case 'delete_task': {
            return tasks.filter(task => task.id !== action.taskToBeDeleted.id);
        }
        case 'update_task': {
            return tasks.map(task => {
                if (task.id === action.taskToBeUpdated.id) {
                    return {
                        ...task,
                        text: action.taskToBeUpdated.text,
                        completed: action.taskToBeUpdated.completed
                    };
                } else {
                    return task;
                }
            });
        }
        case 'clear_tasks':
            return [];
        case 'save_tasks':
            const save = JSON.stringify(action.tasksToBeSaved);
            localStorage.setItem('task-manager-react-app-store', save);
            alert('Saved!')
            return action.tasksToBeSaved;
        case 'load_tasks':
            const load = localStorage.getItem('task-manager-react-app-store');
            if (!load) {
                alert('No Saves!');
                return [];
            } else {
                const tasksToBeLoaded = JSON.parse(load);
                alert('Loaded!');
                return tasksToBeLoaded;
            }
        case 'unload_tasks':
            const saves = localStorage.getItem('task-manager-react-app-store');
            if (!saves) {
                alert('No Saves!');
                return [];
            }
            localStorage.removeItem('task-manager-react-app-store');
            alert('Unloaded!');
            return [];
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
