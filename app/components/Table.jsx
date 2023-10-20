'use client'
import Button from './Button'
import './Table.css'
import 'tailwindcss/tailwind.css';
import { useDispatch, useSelector } from 'react-redux';



export default function Table(props) {
    const dispatch = useDispatch();
    const tableData = useSelector(state => state.taskList)
    const currentDateSort = useSelector(state => state.currentDateSort)
    const filterByDate = useSelector(state => state.filterByDate)
    let filteredData = [];

    let completedTodayCount;

    const createPendingTaskTable = () => {
        const dateSortIcon = <button onClick={() => onSortChange()}>
            <i className={`fas fa-${sortTypes[currentDateSort].class}`} />
        </button>
        const headers = ["CheckBox", "TaskName", `DueDate${dateSortIcon}`, "Priority", "Options"];
        return headers;

    }
    const createCompletedTaskTable = () => {

        const headers = ["CheckBox", "TaskName", "Completed on", "Options"];
        return headers;

    }
    const createTodayTaskTable = () => {
        const headers = ["CheckBox", "TaskName", "Priority", "Options"];
        return headers;

    }


    const handleCompleteTask = (e) => {
        // console.log("handle")
        // console.log(e.target.id)
        dispatch({ type: 'completeTask', payload: { id: e.target.id } })
    }


    const handleUndoCompleteTask = (e) => {
        console.log("undoComplete")
        console.log(e.target.id)
        dispatch({ type: 'undoCompleteTask', payload: { id: e.target.id } })
    }


    const handleOptionsDrop = (e) => {
        // console.log(e.target.value)
        switch (e.target.value) {

            case 'Remove Task':
                console.log(e.target.id)
                dispatch({ type: 'removeTask', payload: { id: e.target.id } })

                break;

            case 'View Task':
                console.log("view")
                console.log(tableData[e.target.id])
                dispatch({ type: 'viewTask', payload: { id: e.target.id } })
                break;

        }


        // e.target.value = ""
        // console.log("Dropdown Wworking")
    }



    const sortTypes = {
        up: {
            class: 'sort-up',
            fn: (a, b) => {
                const date1 = new Date(a)
                const date2 = new Date(b)
                return date1 - date2 ? 1 : -1
            }
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => {
                const date1 = new Date(a)
                const date2 = new Date(b)
                // console.log(date1, date2)
                return date2 - date1 ? 1 : -1
            }
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    };


    const onSortChange = () => {
        // const { currentSort } = this.state;
        let nextSort;

        if (currentDateSort === 'down') nextSort = 'up';
        else if (currentDateSort === 'up') nextSort = 'default';
        else if (currentDateSort === 'default') nextSort = 'down';

        dispatch({ type: 'setCurrentDateSort', payload: { currentSort: nextSort } })


    };

    let header = [];
    switch (props.tableType) {
        case "pendingTask":
            header = createPendingTaskTable();
            break;

        case "completedTask":

            header = createCompletedTaskTable();
            break;

        case "todaysTask":
            header = createTodayTaskTable();
            break;

    }

    return (
        <div className="taskTable" >
            <div className=' flex justify-center items-center'>
                <table >
                    <thead>
                        <tr>
                            {header.map((head, key) => {
                                // console.log(head)
                                return <th key={key} >{head}</th>
                            })}

                        </tr>
                    </thead>
                    <tbody>

                        {props.tableType == "pendingTask" && tableData?.map((data, key) => {
                            if (!data.completed) {

                                if (filterByDate == "" || ((data.dueDate === filterByDate))) {

                                    filteredData.push(data)
                                }
                            }
                        })}




                        {props.tableType == "pendingTask" && filteredData?.sort(sortTypes[currentDateSort].fn).map((data, key) => {

                            // console.log(data, "data after sorting", key)
                            return (
                                <tr key={key}>
                                    <td className="flex items-center justify-center">
                                        <input id={key} type="checkbox" onChange={(e) => { handleCompleteTask(e) }} /></td>
                                    <td>{data.taskName}
                                        <i className="fas fas-trash-o" aria-hidden="true"></i>
                                    </td>
                                    <td>{data.dueDate}</td>
                                    <td>{data.priority}</td>
                                    <td className="flex items-center justify-center" >
                                        <select id={key} onChange={(e) => { handleOptionsDrop(e) }}>
                                            <option value=""></option>
                                            <option>Remove Task</option>
                                            <option>View Task</option>
                                        </select></td>
                                </tr>
                            )
                        })}






                        {
                            props.tableType == "completedTask" && tableData?.map((data, key) => {
                                // { console.log("creating table for completed tasks") }
                                if (data.completed) {
                                    if (data.completedoOn == new Date().toISOString().split('T')[0]) {
                                        completedTodayCount += 1;
                                    }

                                    return (
                                        <tr key={key}>
                                            <td className="flex items-center justify-center">
                                                <input id={key} type="checkbox" onChange={(e) => { handleUndoCompleteTask(e) }} /></td>
                                            <td>{data.taskName}</td>
                                            <td>{data.completedOn}</td>
                                            {/* <td>{data.priority}</td> */}
                                            <td className="flex items-center justify-center" >
                                                <select id={key} onChange={(e) => { handleOptionsDrop(e) }}>
                                                    <option value=""></option>
                                                    <option>Remove Task</option>
                                                    <option>View Task</option>
                                                </select></td>
                                        </tr>
                                    )
                                }

                            })
                        }







                        {
                            props.tableType == "todaysTask" && tableData?.map((data, key) => {
                                let yourDate = new Date().toISOString().split('T')[0]
                                // console.log(yourDate.toISOString().split('T')[0])
                                if (data.dueDate == yourDate && data.completed == false) {

                                    return (
                                        <tr key={key}>
                                            <td className="flex items-center justify-center">
                                                <input id={key} type="checkbox" onChange={(e) => { handleCompleteTask(e) }} /></td>
                                            <td>{data.taskName}</td>
                                            {/* <td>{data.completedOn}</td> */}
                                            <td>{data.priority}</td>
                                            <td className="flex items-center justify-center" >
                                                <select id={key} onChange={(e) => { handleOptionsDrop(e) }}>
                                                    <option value=""></option>
                                                    <option>Remove Task</option>
                                                    <option>View Task</option>
                                                </select></td>
                                        </tr>
                                    )
                                }

                                //     if(data.dueDate == yourDate && data.completed == true)

                            }



                            )
                        }

                        {/* <tr>
                            <td className="flex items-center justify-center">
                                <input type="checkbox" /></td>
                            <td>Task1</td>
                            <td>23/04/2025</td>
                            <td>P0</td>
                            <td className="flex items-center justify-center" ><select>
                                <option value=""></option>
                                <option>Remove Task</option>
                                <option>View Task</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td className="flex items-center justify-center"> <input type="checkbox" /></td>
                            <td>Task1</td>
                            <td>23/04/2025</td>
                            <td>P0</td>
                            <td className="flex items-center justify-center" ><select>
                                <option value=""></option>
                                <option>Remove Task</option>
                                <option>View Task</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td className="flex items-center justify-center"> <input type="checkbox" /></td>
                            <td>Task1</td>
                            <td>23/04/2025</td>
                            <td>P0</td>
                            <td className="flex items-center justify-center" >
                                <select>
                                    <option value=""></option>
                                    <option>Remove Task</option>
                                    <option>View Task</option>
                                </select></td>
                        </tr> */}
                    </tbody>

                </table>
            </div>

            {/* <div className=" m-5 flex justify-center items-center" >
                <Button buttonName="CreateTask" buttonFunction="handleAddTask" />
            </div> */}
        </div>
    );
}