import React                            from 'react';
import { connect }                      from 'react-redux';
import { editExpense, removeExpense }   from '../actions/expenses';
import ExpenseForm                      from './ExpenseForm';

export class EditExpensedPage extends React.Component{
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemoveCLick = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                <h1>Edit expense</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemoveCLick}
                >Remove</button>
            </div>
        );
    };
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensedPage);