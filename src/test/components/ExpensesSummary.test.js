import React                    from 'react';
import { shallow }              from 'enzyme';
import { ExpensesSummary }      from '../../components/ExpensesSummary';
import expenses                 from '../fixtures/expenses';
import selectExpensesTotal      from '../../selectors/expenses-total';

test('should render 1 expense summary correctly', () => {
    const mockData = [expenses[0]];
    const expensesTotal = selectExpensesTotal(mockData);
    const wrapper = shallow(
        <ExpensesSummary u
            expensesTotal={expensesTotal}
            expensesCount={mockData.length}
        />
    );

    expect(wrapper).toMatchSnapshot();
});

test('should render multiple expense summary correctly', () => {
    const expensesTotal = selectExpensesTotal(expenses);
    const wrapper = shallow(
        <ExpensesSummary 
            expensesTotal={expensesTotal}
            expensesCount={expenses.length}
        />
    );

    expect(wrapper).toMatchSnapshot();
});