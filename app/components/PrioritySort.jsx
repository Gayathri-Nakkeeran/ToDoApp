import './SortButton/SortButton.css'
import { useDispatch, useSelector } from 'react-redux'
export default function PrioritySort() {
    const dispatch = useDispatch()
    const currentPrioritySort = useSelector(state => state.currentPrioritySort)

    const handleSortPriorityClick = () => {
        let nextSort;
        console.log("Sorting By priority")
        if (currentPrioritySort === 'asc') nextSort = 'desc';
        else if (currentPrioritySort === 'desc') nextSort = 'asc';
        dispatch({ type: 'setPrioritySort', payload: { currentSort: nextSort } })

    }
    return (

        <div className="sortButton">
            <button onClick={() => { handleSortPriorityClick() }}>Sort By Priority  <i className={currentPrioritySort == "asc" ? 'fa fa-sort-up sortIcon' : 'fa fa-sort-down sortIcon'} /> </button>
        </div>
    );

}