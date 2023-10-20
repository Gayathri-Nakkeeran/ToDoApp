import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
    createTask, submittingTask, addingTaskName, addingTaskDescription,
    addingTaskDueDate, addingTaskPriority, closingTaskScreen, completingTask,
    backToPendingTask, deletingTask, viewingTask, closeViewingTask,
    sortingByDate, filteringByDate, sortingByPriority, sortingTrue, togglingSort,
    settingTableData
} from './slice';


function* createNewTask() {
    yield put(createTask({ buttonType: 'submit' }));
}

function* submitTask() {
    yield put(submittingTask({ buttonType: 'button' }));
}

function* getTaskNameInput(action) {
    yield put(addingTaskName({ taskName: action.payload.taskName }))
}
function* getTaskDescriptionInput(action) {
    yield put(addingTaskDescription({ description: action.payload.description }))
}
function* getTaskDateInput(action) {
    yield put(addingTaskDueDate({ dueDate: action.payload.dueDate }))
}
function* getTaskPriorityInput(action) {
    yield put(addingTaskPriority({ priority: action.payload.priority }))
}

function* closeTaskScreen(action) {
    yield put(closingTaskScreen())
}

function* completeTask(action) {
    yield put(completingTask({ id: action.payload.id }))
}

function* undoCompleteTask(action) {
    yield put(backToPendingTask({ id: action.payload.id }))
}

function* deleteTask(action) {
    yield put(deletingTask({ id: action.payload.id }))
}

function* viewTask(action) {
    yield put(viewingTask({ id: action.payload.id }))
}
function* closeViewTask(action) {
    yield put(closeViewingTask())
}

function* sortByDate(action) {

    yield put(sortingByDate({ currentSort: action.payload.currentSort }))
}

function* sortByPriority(action) {
    yield put(sortingByPriority({ currentSort: action.payload.currentSort }))
}

function* setFilterDate(action) {
    yield put(filteringByDate({ filterByDate: action.payload.filterByDate }))
}
function* setSorting(action) {
    yield put(sortingTrue({ sortOrUnsort: action.payload.sortOrUnsort }))
}

function* toggleSort(action) {
    yield put(togglingSort())
}

function* setTableData(action) {
    yield put(settingTableData({ tableData: action.payload.tableData }))
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
    yield takeEvery('setPrioritySort', sortByPriority)
    yield takeEvery('setFilterDate', setFilterDate)
    yield takeEvery('setSorting', setSorting)
    yield takeEvery('toggleSort', toggleSort)
    yield takeEvery('setTableData', setTableData)

}

export default rootSaga;