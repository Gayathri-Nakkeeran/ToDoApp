import { useDispatch, useSelector } from 'react-redux';
export default function viewTaskPopup() {
    const dispatch = useDispatch();
    const currentViewingTask = useSelector(state => state.currentViewingTask)
    var modal = document.getElementById('view-modal');
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    return (
        <div id="viewModal" className="view-modal">
            <div className="modalCard">
                <header className="w3-container w3-teal viewHeader">
                    <button onClick={() => {
                        document.getElementById('viewModal').style.display = 'none'
                        dispatch({ type: 'closeViewTask' })
                    }}
                        className="closeIcon">&times;</button>

                    <br></br>
                    <h2>Task Name: {currentViewingTask.taskName}</h2>
                </header>
                <div className="w3-container">
                    <p>Description: {currentViewingTask.description}</p>
                    <p>Due Date: {currentViewingTask.dueDate}</p>
                    <p>Priority: {currentViewingTask.priority}</p>
                    <p>Created On: {currentViewingTask.createdDate}</p>
                    <p>LastModified On: {currentViewingTask.lastModifiedOn}</p>

                </div>

            </div>
        </div>

    )
} 