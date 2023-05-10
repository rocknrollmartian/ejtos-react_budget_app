import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
		// alert()
		const expense = {
			name: name,
			cost: 10,
		};
		dispatch({
			type: 'RED_EXPENSE',
			payload: expense
		});
	}

    
    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td>{currency}{props.cost}</td> 
        <td><TiDelete size='3em' color="red" onClick={handleDeleteExpense}></TiDelete></td>
        <td align="center"><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
		<td align="center"><button onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        </tr>
    );
};

export default ExpenseItem;


