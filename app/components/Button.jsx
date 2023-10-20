'use client'

import { useDispatch, useSelector } from 'react-redux'

export default function Button(props) {
    // const creating = useSelector(state => state.isCreating);
    const type = useSelector(state => state.buttonType)
    // let type;


    const dispatch = useDispatch()
    const handleButtonClick = (e) => {
        e.preventDefault()
        // console.log(e.target)
        // console.log(props.formValues)
        if (props.buttonFunction == "handleAddTask") {
            // type = "button"
            // console.log(type)
            dispatch({ type: 'createTask' })

        }

        if (props.buttonFunction == "submitTask") {
            let formValues = document.getElementsByTagName("input")
            for (let { input, iny } in formValues) {
                // console.log(input, iny)

            }

            // console.log()
            // console.log("New Task Submitted")
            // type = "submit"
            // console.log(props.formValues)
            dispatch({ type: 'submitTask' })


        }

        if (props.buttonFunction == "closePopUp") {

            dispatch({ type: 'closePopUp' })
            // dispatch({ type: 'submitTask' })
        }

        if (props.buttonFunction == "closeView") {
            dispatch({ type: 'closeViewTask' })
        }

    }
    return (


        <div>
            {/* {console.log(type)} */}
            <button type={type} onClick={handleButtonClick}>{props.buttonName}</button>
        </div>

    );
}