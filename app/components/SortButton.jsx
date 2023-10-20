// "use client"
import './SortButton.css'
import { useDispatch, useSelector } from 'react-redux'
export default function SortButton() {
    const dispatch = useDispatch()
    const currentDateSort = useSelector(state => state.currentDateSort)

    const handleSortClick = () => {
        let nextSort;
        if (currentDateSort === 'down') nextSort = 'up';
        else if (currentDateSort === 'up') nextSort = 'default';
        else if (currentDateSort === 'default') nextSort = 'down';


        dispatch({ type: 'setCurrentDateSort', payload: { currentSort: nextSort } })




    }
    return (
        <div className="sortButton">
            {/* <h3>Sorting Function Here</h3> */}
            <button onClick={() => { handleSortClick() }}>Sort by due</button>
        </div>
    );
}