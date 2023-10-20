import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isCreating: false,
    buttonType: "button",
    taskName: "",
    description: "",
    dueDate: "",
    priority: '',
    taskCompleted: 0,
    isViewing: false,
    currentDateSort: 'up',
    task: {},
    taskList: [],
    currentViewingTask: {},
    filterByDate: null,
    currentPrioritySort: 'desc',
    isSorting: false,
    isSortByDate: true,
    sortOrUnsort: "Sort Task",
    tableData: [],
}

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        createTask:
            (state, action) => {
                state.isCreating = !state.isCreating
                state.buttonType = action.payload.buttonType

            },

        submittingTask:
            (state, action) => {

                state.isCreating = !state.isCreating
                state.buttonType = action.payload.buttonType
                const currentdate = new Date();
                let datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();

                state.task["createdDate"] = datetime;
                state.task["lastModifiedOn"] = datetime;


                state.task["taskName"] = state.taskName
                state.task['description'] = state.description
                state.task['dueDate'] = state.dueDate
                state.task['priority'] = state.priority
                state.task['completed'] = false

                state.taskList.push(state.task)


                state.taskName = ""
                state.description = ""
                state.dueDate = ''
                state.priority = ""
                state.isCreating = false
                state.task = {}






            },


        addingTaskName:
            (state, action) => {
                state.taskName = action.payload.taskName
            },

        addingTaskDescription:
            (state, action) => {
                state.description = action.payload.description

            },

        addingTaskDueDate:
            (state, action) => {
                state.dueDate = action.payload.dueDate
            },

        addingTaskPriority:
            (state, action) => {
                state.priority = action.payload.priority
            },

        closingTaskScreen:
            (state, action) => {
                state.taskName = ""
                state.description = ""
                state.dueDate = ''
                state.priority = ""
                state.isCreating = false
                state.createdDate = ""
                state.lastModifiedOn = ""
                state.task = {}

            },
        completingTask:
            (state, action) => {
                state.taskCompleted += 1;
                state.taskList[action.payload.id]["completed"] = true;
                state.taskList[action.payload.id]["completedOn"] = new Date().toISOString().split('T')[0]



            },

        viewingTask:
            (state, action) => {
                state.isViewing = true
                state.currentViewingTask = state.taskList[action.payload.id]



            },

        closeViewingTask:
            (state, action) => {
                state.isViewing = false

            },

        backToPendingTask:
            (state, action) => {

                state.taskCompleted -= 1;
                state.taskList[action.payload.id]["completed"] = false;
                state.taskList[action.payload.id]["lastModifiedOn"] = new Date();
            },

        deletingTask:
            (state, action) => {

                if (state.taskList[action.payload.id]["completed"]) {

                    state.taskCompleted -= 1;
                }

                state.taskList.splice(action.payload.id, 1)



            },

        sortingByDate:
            (state, action) => {
                state.currentDateSort = action.payload.currentSort

            },

        filteringByDate:
            (state, action) => {

                state.filterByDate = action.payload.filterByDate
            },

        sortingByPriority:
            (state, action) => {

                state.currentPrioritySort = action.payload.currentSort
            },

        sortingTrue:
            (state, action) => {
                state.isSorting = !state.isSorting
                state.sortOrUnsort = action.payload.sortOrUnsort

            },
        togglingSort:
            (state, action) => {
                state.isSortByDate = !state.isSortByDate
            },

        settingTableData:
            (state, action) => {

                state.tableData = action.payload.tableData
            }




    }
})

export default slice.reducer;
export const { createTask, submittingTask, addingTaskName, addingTaskDescription, addingTaskDueDate, addingTaskPriority,
    closingTaskScreen, completingTask, backToPendingTask, deletingTask, viewingTask,
    closeViewingTask, sortingByDate, filteringByDate, sortingByPriority, sortingTrue, togglingSort, settingTableData } = slice.actions;
