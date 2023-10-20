'use client'

import { useDispatch, useSelector } from 'react-redux'
export default function Button(props) {
    const taskName = useSelector(state => state.taskName)
    const dueDate = useSelector(state => state.dueDate);
    const priority = useSelector(state => state.priority)
    const dispatch = useDispatch()
    const handleButtonClick = (e) => {

        if (props.buttonFunction == "handleAddTask") {
            dispatch({ type: 'createTask' })
        }

        if (props.buttonFunction == "submitTask") {
            if (taskName && dueDate && priority)
                dispatch({ type: 'submitTask' })


        }

        if (props.buttonFunction == "closePopUp") {
            dispatch({ type: 'closePopUp' })
        }

        if (props.buttonFunction == "closeView") {
            dispatch({ type: 'closeViewTask' })
        }

    }
    return (
        <button type={props.buttonName} form="createTaskForm" onClick={handleButtonClick}>{props.buttonName}</button>

    );
}