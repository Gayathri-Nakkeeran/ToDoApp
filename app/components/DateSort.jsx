
import './SortButton/SortButton.css'
import { useDispatch, useSelector } from 'react-redux'
export default function SortButton() {
    const dispatch = useDispatch()
    const currentDateSort = useSelector(state => state.currentDateSort)
    const handleSortClick = () => {
        let nextSort;
        if (currentDateSort === 'down') nextSort = 'up';
        else if (currentDateSort === 'up') nextSort = 'down';
        dispatch({ type: 'setCurrentDateSort', payload: { currentSort: nextSort } })
    }
    return (
        <div className="sortButton">
            <button onClick={() => { handleSortClick() }}>Sort by date <i className={currentDateSort == "up" ? 'fa fa-sort-up sortIcon' : 'fa fa-sort-down sortIcon'} /> </button>
        </div>
    );
}