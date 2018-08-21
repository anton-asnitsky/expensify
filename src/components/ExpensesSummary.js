import React                from 'react';
import { connect }          from 'react-redux';
import selectExpensesTotal  from '../selectors/expenses-total';
import numeral              from 'numeral';

export const ExpensesSummary = (props) => {
    return(
        <div>
            Viewing { props.expensesCount } expense{ props.expensesCount > 1 && 's'} tottaling { numeral(props.expensesTotal / 100).format('$0,0.00') }.
        </div>
    );
};

const mapStateToPorps = (state) => {
    return {
        expensesTotal: selectExpensesTotal(state.expenses),
        expensesCount: state.expenses.length
    };
};

export default connect(mapStateToPorps)(ExpensesSummary);