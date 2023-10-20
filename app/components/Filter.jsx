import './Filter.css';
import { useDispatch } from 'react-redux';
export default function Filter() {
    const dispatch = useDispatch();

    const handleFiltering = (e) => {
        console.log("Filtering");
        dispatch({ type: 'setFilterDate', payload: { filterByDate: e.target.value } })
    }
    return (


        <div className="filter">
            <label>Filter Task: </label>
            <input onChange={(e) => { handleFiltering(e) }} className="filterInput" type="date"></input>

        </div>


    );
}