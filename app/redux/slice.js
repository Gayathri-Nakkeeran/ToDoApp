import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isCreating: false,
    buttonType: "button",
    taskName: "",
    description: "",
    dueDate: "",
    priority: 'P2',
    taskCompletedToday: 0,
    isViewing: false,
    currentDateSort: 'default',
    task: {},
    taskList: [],
    currentViewingTask: {},
    filterByDate: null,
}

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        createTask:
            (state, action) => {
                console.log("reducer working now")
                state.isCreating = !state.isCreating
                state.buttonType = action.payload.buttonType
                console.log(action)
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
                // state.createdDate = ""
                // state.lastModifiedOn = ""
                state.task = {}






            },

        addingTaskToList:
            (state, action) => {

            },

        addingTaskName:
            (state, action) => {
                state.taskName = action.payload.taskName
            },

        addingTaskDescription:
            (state, action) => {
                state.description = action.payload.description
                // console.log(state.description)
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
                // state.isViewing = false
            },
        completingTask:
            (state, action) => {
                state.taskList[action.payload.id]["completed"] = true;
                state.taskList[action.payload.id]["completedOn"] = new Date().toISOString().split('T')[0]



            },

        viewingTask:
            (state, action) => {
                state.isViewing = true
                state.currentViewingTask = state.taskList[action.payload.id]
                // console.log(action.payload.id)
                // console.log(state.taskList[action.payload.id])


            },

        closeViewingTask:
            (state, action) => {
                state.isViewing = false

            },

        backToPendingTask:
            (state, action) => {
                console.log("slice fro undo")
                state.taskList[action.payload.id]["completed"] = false;
                state.taskList[action.payload.id]["lastModifiedOn"] = new Date();
            },

        deletingTask:
            (state, action) => {
                // console.log("Slice working for remove")
                state.taskList.splice(action.payload.id, 1)
            },

        sortingByDate:
            (state, action) => {
                // console.log("slice for sartt")
                state.currentDateSort = action.payload.currentSort
                // console.log("from slice sort date", state.currentDateSort)
            },

        filteringByDate:
            (state, action) => {
                // console.log("slice for filter date", action.payload.filterByDate)
                state.filterByDate = action.payload.filterByDate
            }

        // viewingTask:
        //     (state, action) => {
        //         console.log("saga working for viewing task")
        //         state.isViewing = true;
        //     }



    }
})

export default slice.reducer;
export const { createTask, submittingTask, addingTaskName, addingTaskDescription, addingTaskDueDate, addingTaskPriority, closingTaskScreen, completingTask, backToPendingTask, deletingTask, viewingTask, closeViewingTask, sortingByDate, filteringByDate } = slice.actions;
// export const getOffset = (initialState) => initialState.offset