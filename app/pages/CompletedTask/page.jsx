import Table from '../../components/Table'
import Navbar from '../../components/Navbar'
import { useSelector } from 'react-redux';
import '../../globals.css';
import ViewTaskPopup from '@/app/components/View-task-popUp';

export default function CompletedTaskPage() {
    // const tableData = useSelector(state => state.taskList)
    // const isViewing = useSelector(state => state.isViewing)
    // const isViewing = useSelector(state => state.isViewing)
    return (
        <div className='mainPage'>
            <div className='container'>
                <Navbar />
                <h3 className="m-5">Hurray!! You Completed 10 Tasks Today</h3>


                <Table tableType="completedTask" />

            </div>
        </div>
    )
}