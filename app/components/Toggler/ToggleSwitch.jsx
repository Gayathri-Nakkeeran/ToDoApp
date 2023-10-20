import './Switch.css';
import { useDispatch, useSelector } from 'react-redux'
import PrioritySort from '../PrioritySort';
import DateSort from '../DateSort'
const Switch = () => {
    const dispatch = useDispatch();
    const isOn = useSelector(state => state.isSortByDate)
    const handleToggleChange = (e) => {
        dispatch({ type: 'toggleSort' })
    }


    return (
        <>
            {isOn ? <DateSort /> : <PrioritySort />}

            <input
                checked={isOn}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                onChange={(e) => { handleToggleChange(e) }}
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

export default Switch;