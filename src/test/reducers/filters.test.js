import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortByAmount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
});

test('should set sortByDate', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const action = {type: 'SET_TEXT_FILTER', text: 'a'};
    const state = filtersReducer(currentState, action);

    expect(state.text).toBe('a');
});

test('should setup startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const action = {type: 'SET_START_DATE', startDate: 0};
    const state = filtersReducer(currentState, action);

    expect(state.startDate).toBe(0);
});

test('should setup endDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const action = {type: 'SET_END_DATE', endDate: 0};
    const state = filtersReducer(currentState, action);

    expect(state.endDate).toBe(0);
});