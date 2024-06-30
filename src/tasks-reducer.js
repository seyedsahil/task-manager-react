
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
            alert(JSON.stringify(action.tasksToBeSaved));
            return action.tasksToBeSaved;
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
