import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, Budget, Location } = useContext(AppContext);
 
    const handleNewBudget = (newBudget) => {
        console.log(newBudget)
        dispatch({
            type: 'NEW_BUDGET',
            payload: newBudget,
        });

    }
    return (
        <div className='alert alert-primary'>
            <span>Budget: {Location} <input type="number" value={Budget} onChange={(e) => handleNewBudget(e.target.value)}></input></span>
        </div>
    );
};

export default Budget;