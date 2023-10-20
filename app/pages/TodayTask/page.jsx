"use client"
import Table from '../../components/Table/Table'
import Navbar from '../../components/Navbar/Navbar'
import ViewTaskPopup from '@/app/components/View-task-popUp';
import Filter from '@/app/components/Filter/Filter'
import SortOption from '@/app/components/SortButton/SortButton'
import PrioritySort from '@/app/components/PrioritySort'
import '../../globals.css'
import './todayTask.css'
import { useSelector } from 'react-redux';
export default function TodayTaskPage() {
    const isViewing = useSelector(state => state.isViewing)
    const isSorting = useSelector(state => state.isSorting)
    return (
        <div className='mainPage'>
            <div className='container'>
                <Navbar />
                <h1 className=" pageHeader m-5">Tasks of the Day</h1>

                <div className="sortingButtonsContainer">
                    <Filter />
                    <SortOption />
                    {isSorting ? <PrioritySort />
                        : ""}

                </div>
                {isViewing ? <ViewTaskPopup /> : ""}
                <Table tableType="todaysTask" />
            </div>
        </div>

    )
}