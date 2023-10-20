'use client'
import './Table.css'
import 'tailwindcss/tailwind.css';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation'
export default function Table(props) {
    const currentPage = useSearchParams().get('page')
    const dispatch = useDispatch();
    const tableData = useSelector(state => state.taskList)
    const currentDateSort = useSelector(state => state.currentDateSort)
    const filterByDate = useSelector(state => state.filterByDate)
    const currentPrioritySort = useSelector(state => state.currentPrioritySort)
    let filteredData = []
    let sortedData = [];
    const isSortByDate = useSelector(state => state.isSortByDate)


    if (props.tableType == "pendingTask") {
        filteredData = []
        tableData?.map((data, key) => {
            if (!data.completed) {

                if (!filterByDate || ((data.dueDate === filterByDate))) {
                    let tableData = { ...data, key: key }
                    filteredData.push((tableData))
                }
            }
        })
    }
    else if (props.tableType == "completedTask") {
        filteredData = []
        tableData?.map((data, key) => {
            if (data.completed) {

                if (!filterByDate || ((data.dueDate === filterByDate))) {
                    let tableData = { ...data, key: key }
                    filteredData.push((tableData))
                }
            }
        })
    }

    else {
        filteredData = []
        let yourDate = new Date().toISOString().split('T')[0]
        tableData?.map((data, key) => {
            if (data.dueDate == yourDate && data.completed == false) {

                if (!filterByDate || ((data.dueDate === filterByDate))) {
                    let tableData = { ...data, key: key }
                    filteredData.push((tableData))
                }
            }
        })
    }
    const createPendingTaskTable = () => {
        const headers = ["Mark as Done", "TaskName", `DueDate`, "Priority", "Options"];
        return headers;
    }
    const createCompletedTaskTable = () => {
        const headers = ["Work Again", "TaskName", "Completed on", "Options"];
        return headers;
    }
    const createTodayTaskTable = () => {
        const headers = ["Mark as Done", "TaskName", "Priority", "Options"];
        return headers;
    }

    const handleCompleteTask = (e) => {
        dispatch({ type: 'completeTask', payload: { id: e.target.id } })
    }
    const handleUndoCompleteTask = (e) => {
        dispatch({ type: 'undoCompleteTask', payload: { id: e.target.id } })
    }
    const handleOptionsDrop = (e, task) => {
        switch (task) {

            case 'remove':
                dispatch({ type: 'removeTask', payload: { id: e.target.id } })
                break;

            case 'view':
                dispatch({ type: 'viewTask', payload: { id: e.target.id } })
                break;


            case 'edit':
                window.alert("try again tomorrow")

        }
    }



    const sortTypes = {


        up: {
            class: 'sort-up',

            fn: (a, b) => {

                if (currentPage == 'pending')
                    return a.dueDate.localeCompare(b.dueDate)

                return a.completedOn - b.completedOn //Have to check this -- since one day completed task only for now?

            }
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => {

                if (currentPage == 'pending')
                    return b.dueDate.localeCompare(a.dueDate)

                return b.completedOn - a.completedOn

            }
        }
        // ,
        // default: {
        //     class: 'sort',
        //     fn: (a, b) => a
        // }
    };

    const sortPriorityTypes = {
        asc: {
            class: 'sort-up',
            fn: (a, b) => {

                return b.priority.localeCompare(a.priority)

            }
        },
        desc: {
            class: 'sort-down',
            fn: (a, b) => {
                return a.priority.localeCompare(b.priority)

            }
        }
        // ,
        // default: {
        //     class: 'sort',
        //     fn: (a, b) => a
        // }
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
    if (isSortByDate) {
        sortedData = filteredData?.sort(sortTypes[currentDateSort].fn);
    }
    else {
        sortedData = filteredData?.sort(sortPriorityTypes[currentPrioritySort].fn)
    }

    return (
        <div className="taskTable" >
            <div className=' flex justify-center items-center'>
                <table >
                    <thead>
                        <tr>
                            {header.map((head, key) => {
                                return <th key={key} >{head}</th>
                            })}

                        </tr>
                    </thead>
                    <tbody>
                        {props.tableType == "pendingTask" && sortedData?.map((data, key) => {

                            return (
                                <tr key={data.key}>
                                    <td className="flex items-center justify-center" >

                                        <div id={data.key} onClick={(e) => handleCompleteTask(e)} className="checkBox">
                                            Complete
                                            <svg id={data.key} width="140" height="65" viewBox="0 0 140 65" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="10" className="button" width="128.8" height="63.9" />
                                                <rect x="0" y="22.5" className="box" width="20" height="20" />
                                                <polyline className="checkMark" points="4.5,32.6 8.7,36.8 16.5,29.1" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td>{data.taskName}
                                        <i className="fas fas-trash-o" aria-hidden="true"></i>
                                    </td>
                                    <td>{data.dueDate}</td>
                                    <td>{data.priority}</td>
                                    <td className="flex items-center justify-center" >
                                        <div className="optionIcons">
                                            <button onClick={(e) => { handleOptionsDrop(e, "remove") }}><i id={data.key} className="fa fa-trash" />   </button>

                                            <button onClick={(e) => { handleOptionsDrop(e, "view") }}><i id={data.key} className="fa fa-eye" /></button>
                                            <button onClick={(e) => { handleOptionsDrop(e, "edit") }}><i id={data.key} className="fa fa-edit" /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })} {
                            props.tableType == "completedTask" && sortedData?.map((data, key) => {
                                return (
                                    <tr key={data.key}>
                                        <td className="flex items-center justify-center">
                                            <div id={data.key} onClick={(e) => handleUndoCompleteTask(e)} className="checkBox">
                                                Redo
                                                <svg id={data.key} width="140" height="65" viewBox="0 0 140 65" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="10" className="button" width="128.8" height="63.9" />
                                                    <rect x="0" y="22.5" className="box" width="20" height="20" />
                                                    <polyline className="checkMark" points="4.5,32.6 8.7,36.8 16.5,29.1" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td>{data.taskName}</td>
                                        <td>{data.completedOn}</td>
                                        <td className="flex items-center justify-center" >
                                            <div className="optionIcons">
                                                <button onClick={(e) => { handleOptionsDrop(e, "remove") }}><i id={data.key} className="fa fa-trash" />   </button>

                                                <button onClick={(e) => { handleOptionsDrop(e, "view") }}><i id={data.key} className="fa fa-eye" /></button>
                                                <button onClick={(e) => { handleOptionsDrop(e, "edit") }}><i id={data.key} className="fa fa-edit" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })

                        } {
                            props.tableType == "todaysTask" && sortedData?.map((data, key) => {
                                return (
                                    <tr key={data.key}>
                                        <td className="flex items-center justify-center">
                                            <div id={data.key} onClick={(e) => handleCompleteTask(e)} className="checkBox">
                                                Complete
                                                <svg id={data.key} width="140" height="65" viewBox="0 0 140 65" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="10" className="button" width="128.8" height="63.9" />
                                                    <rect x="0" y="22.5" className="box" width="20" height="20" />
                                                    <polyline className="checkMark" points="4.5,32.6 8.7,36.8 16.5,29.1" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td>{data.taskName}</td>
                                        <td>{data.priority}</td>
                                        <td className="flex items-center justify-center" >
                                            <div className="optionIcons">
                                                <button onClick={(e) => { handleOptionsDrop(e, "remove") }}><i id={data.key} className="fa fa-trash" />   </button>

                                                <button onClick={(e) => { handleOptionsDrop(e, "view") }}><i id={data.key} className="fa fa-eye" /></button>
                                                <button onClick={(e) => { handleOptionsDrop(e, "edit") }}><i id={data.key} className="fa fa-edit" /></button>
                                            </div>

                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>

                </table>
            </div>
        </div>
    );
}