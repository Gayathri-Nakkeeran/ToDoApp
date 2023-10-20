"use client"
import Table from '../../components/Table/Table'
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux';
import ViewTaskPopup from '@/app/components/View-task-popUp';
import Filter from '@/app/components/Filter/Filter'
import SortOption from '@/app/components/SortButton/SortButton'
import DateSort from '@/app/components/DateSort'
import '../../globals.css';

export default function CompletedTaskPage() {
    const taskCount = useSelector(state => state.taskCompleted)
    const isViewing = useSelector(state => state.isViewing)
    const isSorting = useSelector(state => state.isSorting)
    return (
        <div className='mainPage'>
            <div className='container'>
                <Navbar />
                <h3 className="m-5">Hurray!! You've Completed {taskCount} Tasks </h3>

                <div className="sortingButtonsContainer">
                    <Filter />
                    <SortOption />
                    {isSorting ? <DateSort />
                        : ""}

                </div>
                {isViewing ? <ViewTaskPopup /> : ""}
                <Table tableType="completedTask" />

            </div>
        </div>
    )
}