import expensesReducer  from '../../reducers/expenses';
import expenses         from '../fixtures/expenses';
import moment           from 'moment';

test('should setup default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expnse by id',  () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found',  () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense',  () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    };
    const state = expensesReducer([], action);
    
    expect(state).toEqual([ expenses[0] ]);
});

test('should edit expense',  () => {
    const updatedExpense = {
        id: 2,
        description: 'Rent a car',
        note: 'Renault MEgan',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: updatedExpense.id,
        updates: updatedExpense
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([ expenses[0], updatedExpense, expenses[2] ]);
});

test('should not edit expense if given id not found',  () => {
    const updatedExpense = {
        id: '-1',
        description: 'Rent a car',
        note: 'Renault MEgan',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: updatedExpense.id,
        updates: updatedExpense
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});