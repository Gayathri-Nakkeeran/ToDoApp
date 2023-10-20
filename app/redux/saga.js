import { takeEvery, put, call, select } from 'redux-saga/effects';
import { createTask, submittingTask, addingTaskName, addingTaskDescription, addingTaskDueDate, addingTaskPriority, closingTaskScreen, completingTask, backToPendingTask, deletingTask, viewingTask, closeViewingTask, sortingByDate, filteringByDate } from './slice';
// import { useSelector } from 'react-redux'


// const getApiData = async (offset) => {

//   const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
//   const data = await fetch(url)
//     .then((data) => {

//       return data.json().then((value) => {

//         return value
//       })
//     })

//   return data.results
// }





function* createNewTask() {

    // console.log("Saga is running")

    yield put(createTask({ buttonType: 'submit' }));

}

function* submitTask() {

    // console.log("Saga is running")

    yield put(submittingTask({ buttonType: 'button' }));

}

function* getTaskNameInput(action) {
    // console.log(action.payload.taskName)
    yield put(addingTaskName({ taskName: action.payload.taskName }))

}
function* getTaskDescriptionInput(action) {
    // console.log(action.payload.taskName)
    yield put(addingTaskDescription({ description: action.payload.description }))

}
function* getTaskDateInput(action) {
    // console.log(action.payload.taskName)
    yield put(addingTaskDueDate({ dueDate: action.payload.dueDate }))

}
function* getTaskPriorityInput(action) {
    // console.log(action.payload.taskName)
    yield put(addingTaskPriority({ priority: action.payload.priority }))

}

function* closeTaskScreen(action) {
    // console.log("sgaga working for close button")
    // console.log(action.payload.taskName)
    yield put(closingTaskScreen())


}

function* completeTask(action) {
    console.log("sgaga working for completing button")
    // console.log(action.payload.taskName)
    yield put(completingTask({ id: action.payload.id }))

}

function* undoCompleteTask(action) {
    // console.log("sgaga working for completing button")
    // console.log(action.payload.taskName)
    yield put(backToPendingTask({ id: action.payload.id }))

}

function* deleteTask(action) {
    console.log("delete task working for completing button")
    // console.log(action.payload.taskName)
    yield put(deletingTask({ id: action.payload.id }))

}

function* viewTask(action) {
    // console.log("delete task working for completing button")
    // console.log(action.payload.taskName)
    yield put(viewingTask({ id: action.payload.id }))

}
function* closeViewTask(action) {
    console.log("close viewing task working for completing button")
    // console.log(action.payload.taskName)
    yield put(closeViewingTask())

}

function* sortByDate(action) {

    console.log("From Saaga sorting type", action.payload.currentSort)
    yield put(sortingByDate({ currentSort: action.payload.currentSort }))

}

function* setFilterDate(action) {

    console.log(action.payload.filterByDate)
    // console.log("sagaaaaaaaaaaaa")
    yield put(filteringByDate({ filterByDate: action.payload.filterByDate }))

}

function* rootSaga() {
    yield takeEvery('createTask', createNewTask)
    yield takeEvery('submitTask', submitTask)
    yield takeEvery('closePopUp', closeTaskScreen)
    yield takeEvery('addTaskName', getTaskNameInput)
    yield takeEvery('addTaskDescription', getTaskDescriptionInput)
    yield takeEvery('addTaskDue', getTaskDateInput)
    yield takeEvery('addTaskPriority', getTaskPriorityInput)
    yield takeEvery('completeTask', completeTask)
    yield takeEvery('undoCompleteTask', undoCompleteTask)
    yield takeEvery('removeTask', deleteTask)
    yield takeEvery('viewTask', viewTask)
    yield takeEvery('closeViewTask', closeViewTask)
    yield takeEvery('setCurrentDateSort', sortByDate)
    yield takeEvery('setFilterDate', setFilterDate)
    // yield takeEvery('addTaskName' , )
    // yield takeEvery('addTaskName' , )
    //addTaskName , addTaskDescription , addTaskDueDate , addPriority


}

export default rootSaga;