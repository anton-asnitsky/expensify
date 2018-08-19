import React                from 'react';
import { shallow }          from 'enzyme';
import { EditExpensedPage } from '../../components/EditExpensedPage';
import expenses             from '../fixtures/expenses';

let wrapper, editExpenseSpy, removeExpenseSpy, historySpy;

beforeEach(()=> {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensedPage 
                        expense={expenses[1]}  
                        editExpense={editExpenseSpy} 
                        removeExpense={removeExpenseSpy} 
                        history={historySpy} 
            />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');

    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ 
        id: expenses[1].id
    });
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});