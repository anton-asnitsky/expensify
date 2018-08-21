import React                from 'react';
import { connect }          from 'react-redux';
import selectExpenses       from '../selectors/expenses';
import selectExpensesTotal  from '../selectors/expenses-total';
import numeral              from 'numeral';

export const ExpensesSummary = (props) => {
    return(
        <h1>
            Viewing { props.expensesCount } expense{ props.expensesCount > 1 && 's'} totalling { numeral(props.expensesTotal / 100).format('$0,0.00') }.
        </h1>
    );
};

const mapStateToPorps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesCount: visibleExpenses.length
    };
};

export default connect(mapStateToPorps)(ExpensesSummary);