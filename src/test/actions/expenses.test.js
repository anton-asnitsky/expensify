import { addExpense, editExpense, removeExpense }   from '../../actions/expenses';
import expenses                                     from '../fixtures/expenses';
import configurMockStore                            from 'redux-mock-store';
import thunk                                        from 'redux-thunk';
import sratAddExpense                               from '../../actions/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup removeExpense action', () => {
    const action = removeExpense({id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should aetup editExpense action', () => {
    const action = editExpense('123abc', {note: 'New note value'} );
    
    expect(action).toEqual({
        id: '123abc',
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'New note value'
        }
    });
});

test('should setup addExpense action with provided values', () => {

    const action = addExpense(expenses[2]);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[2],
        }
    });
});

test('should add expense to database and store',() => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData));
});

test('should add expense with defaults to database and store',() => {

});

// test('should setup addExpense action with default values', () => {
//     const action = addExpense();
    
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });