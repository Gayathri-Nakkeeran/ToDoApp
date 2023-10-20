import './SortButton.css'
import { useDispatch, useSelector } from 'react-redux'
export default function SortButton() {
    const sortOrUnsortStore = useSelector(state => state.sortOrUnsort)
    let sortOrUnsort = sortOrUnsortStore
    const dispatch = useDispatch();
    const handleSortToggle = () => {
        if (sortOrUnsort == "Sort Task") {
            sortOrUnsort = "Unsort"
        }
        else {
            sortOrUnsort = "Sort Task"
        }
        dispatch({ type: 'setSorting', payload: { sortOrUnsort: sortOrUnsort } })

    }
    return (
        <div className="sortButton">
            <button id="sortUnsortButton" onClick={() => { handleSortToggle() }}>{sortOrUnsortStore}</button>
        </div>
    )
}