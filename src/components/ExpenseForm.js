import React from 'react';
import moment from 'moment';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

 export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteTextChage = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if( amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        this.setState({ createdAt });
    };

    onFocuseChage = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    render(){
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.setState.calendarFocused}
                        onFocusChange={this.onFocuseChage}
                        id="ExpanseFormDatePicker"
                        numberOfMonths={3}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteTextChage}
                    >
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>
        );
    };
}