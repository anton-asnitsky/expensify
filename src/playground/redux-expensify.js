import { createStore, compbineReducers, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
    expanses: [{
        id: 'sajfkjsanf;olkdnf',
        description: 'January Rent',
        notes: 'This was the last paymanet for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// Expanse actions

const addExpanse = ({description = '', notes = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
});
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Expanses reducer
const expansesReduserDefaultState = [];
const expansesReducer = (state = expansesReduserDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

// Filters reducer
const filtersReduserDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReduserDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

// Store Creation
const store = createStore(combineReducers({
    expances: expansesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpanse({
    description: 'Rent',
    amount: 100
}));
const expenseOne = store.dispatch(addExpanse({
    description: 'Coffee',
    amount: 300
}));
const expenseTwo = store.dispatch(addExpanse({
    description: 'Bus',
    amount: 250
}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));