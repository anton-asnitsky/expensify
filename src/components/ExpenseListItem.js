import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
    return (
        <li>
            <p>{description}</p>
            <p>{amount} - {createdAt}</p>
            <button
                onClick={(e) => {
                    dispatch(removeExpense({id}));
                }}
            >Remove</button>
        </li>
    );
};

export default connect()(ExpenseListItem);