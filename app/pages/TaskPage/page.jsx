import Navbar from '../../components/Navbar'
import Table from '../../components/Table'
import Button from '../../components/Button'
import CreateTaskPopup from '../../components/Create-task-popup'
import ViewTaskPopup from '@/app/components/View-task-popUp'
import Filter from '@/app/components/Filter'
import SortButton from '@/app/components/SortButton'

import { useDispatch, useSelector } from 'react-redux'
import './TaskPage.css'
import '../../globals.css'

export default function App() {
    const isCreating = useSelector(state => state.isCreating)
    const tableData = useSelector(state => state.taskList)
    const isViewing = useSelector(state => state.isViewing)

    return (


        <div className="mainPage">

            <div className='container'>

                <Navbar />
                {/* <br></br> */}
                <div className="createTask">
                    {isCreating ?
                        <div className="flex items-center justify-center">
                            <CreateTaskPopup />
                        </div> : <Button buttonName="+ Create New Task" buttonFunction="handleAddTask" />}
                </div>

                <Filter />

                <SortButton />

                {isViewing ? <ViewTaskPopup /> : ""}

                <Table className="taskTable" tableType="pendingTask" tableData={tableData} />

                {/* <div className=" m-5 flex justify-center items-center" >

                </div> */}


            </div>

        </div>





    )
}