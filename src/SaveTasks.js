
export default function SaveTasks({ onClearTasks, onSaveTasks }) {
    return (
        <div>
            <button onClick={onSaveTasks}>Save</button>
            <button onClick={onClearTasks}>Clear</button>
        </div>
    );
}
