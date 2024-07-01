
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
        case 'clear_tasks': {
            return [];
        }
        case 'save_tasks': {
            const store = JSON.parse(localStorage.getItem('task-manager-react-app-store') || '{}');
            const groupName = prompt('Enter group name');
            if (groupName) {
                if (store[groupName]) {
                    alert('Group name already exists!');
                    return action.tasksToBeSaved;
                }
                store[groupName] = action.tasksToBeSaved;
                localStorage.setItem('task-manager-react-app-store', JSON.stringify(store));
                alert(`Saved to group '${groupName}'!`);
            }
            return action.tasksToBeSaved;
        }
        case 'load_tasks': {
            const store = JSON.parse(localStorage.getItem('task-manager-react-app-store') || '{}');
            const groupName = prompt('Enter group name');
            if (groupName) {
                if (!store[groupName]) {
                    alert('Group name does not exist!');
                    return [];
                } else {
                    const tasksToBeLoaded = store[groupName];
                    alert(`Loaded tasks from group '${groupName}'!`);
                    return tasksToBeLoaded;
                }
            }
            return [];
        }
        case 'unload_tasks': {
            localStorage.removeItem('task-manager-react-app-store');
            alert('Remove all saved groups!');
            return [];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
