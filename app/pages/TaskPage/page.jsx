"use client"
import Navbar from '../../components/Navbar/Navbar'
import Table from '../../components/Table/Table'
import Button from '../../components/Button'
import CreateTaskPopup from '../../components/Create-task-popup/Create-task-popup'
import ViewTaskPopup from '@/app/components/View-task-popUp'
import Filter from '@/app/components/Filter/Filter'
import ToggleSwitch from '@/app/components/Toggler/ToggleSwitch'
import SortOption from '@/app/components/SortButton/SortButton'
import { useSelector } from 'react-redux'
import './TaskPage.css'
import '../../globals.css'

export default function App() {
    const isCreating = useSelector(state => state.isCreating)
    const tableData = useSelector(state => state.taskList)
    const isViewing = useSelector(state => state.isViewing)
    const isSorting = useSelector(state => state.isSorting)

    return (
        <div className="mainPage">
            <div className='container'>

                <Navbar />
                <div className="createTask">
                    {isCreating ?
                        <div className="flex items-center justify-center">
                            <CreateTaskPopup />
                        </div> : <Button buttonName="+ Create New Task" buttonFunction="handleAddTask" />}
                </div>
                <div className="sortingButtonsContainer">
                    <Filter />
                    <SortOption />
                    {isSorting ? <ToggleSwitch />
                        : ""}

                </div>
                {isViewing ? <ViewTaskPopup /> : ""}
                <Table className="taskTable" tableType="pendingTask" tableData={tableData} />
            </div>

        </div>





    )
}