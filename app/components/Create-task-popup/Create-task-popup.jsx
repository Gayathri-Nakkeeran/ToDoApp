import Button from '../Button.jsx'
import './Create-task-popup.css';
import { useDispatch } from 'react-redux';

export default function CreateTaskPopup() {
    let dispatch = useDispatch();
    return (
        <div className="TaskForm w-full max-w-xs inline-block">
            <form id="createTaskForm" method="get" className="shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <label className="required block text-black-700 text-sm font-bold mb-2" htmlFor="title">Title: </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 " type="text" name="title" id="title" onChange={(e) => { dispatch({ type: 'addTaskName', payload: { taskName: e.target.value } }) }} required></input><br></br>
                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="description">Description: </label>
                <input className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" name="description" id="description" onChange={(e) => { dispatch({ type: 'addTaskDescription', payload: { description: e.target.value } }) }} ></input><br></br>
                <label className="required block text-black-700 text-sm font-bold mb-2" htmlFor="dueDate">Due Date: </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="date" name="dueDate" id="dueDate" onChange={(e) => { dispatch({ type: 'addTaskDue', payload: { dueDate: e.target.value } }) }} required></input><br></br>
                <label className="required block text-black-700 text-sm font-bold mb-2" htmlFor="priority" >Priority: </label>
                <select className=" required shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 " onChange={(e) => { dispatch({ type: 'addTaskPriority', payload: { priority: e.target.value } }) }} required >
                    <option value="">Select Priority</option>
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                </select>
                <br></br>
                <br></br>
                <div className=" w-full flex justify-around items-center">

                    <Button className="flex-item justify-start" buttonName="Submit" buttonFunction="submitTask" />
                    <br></br>
                    <Button className="flex-item justify-end" buttonName="Close" buttonFunction="closePopUp" />
                </div>

            </form>
        </div>
    );
}