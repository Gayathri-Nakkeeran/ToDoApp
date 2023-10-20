
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'
import '../../globals.css'
import './todayTask.css'

import { useSelector } from 'react-redux';
export default function TodayTaskPage() {
    // const isViewing = useSelector(state => state.isViewing)
    return (
        <div className='mainPage'>
            <div className='container'>
                <Navbar />
                <h1 className=" pageHeader m-5">Tasks of the Day</h1>
                <Table tableType="todaysTask" />
            </div>
        </div>

    )
}