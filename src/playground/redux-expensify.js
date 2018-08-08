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

const editExpense = (id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                } 
                return expense;
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

// FIlter actions

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// Filters reducer
const filtersReduserDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReduserDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || 
                expense.notes.toLowerCase().includes(text.toLowerCase()) ;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }

        return 0;
    });
};

// Store Creation
const store = createStore(combineReducers({
    expances: expansesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expances, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpanse({
    description: 'Tost',
    amount: 300, 
    createdAt: -21000
}));
const expenseTwo = store.dispatch(addExpanse({
    description: 'Bus Station',
    amount: 250,
    createdAt: -1000
}));


// store.dispatch(addExpanse({
//     description: 'Rent',
//     amount: 100
// }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id, createdAt: 1000 }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500, createdAt: -1000 }));

store.dispatch(setTextFilter('o'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate( -125));
// store.dispatch(setEndDate());