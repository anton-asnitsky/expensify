import React                from 'react';
import ReactDOM             from 'react-dom';
import {Provider}           from 'react-redux';
import AppRouter            from './routers/AppRouter';   
import { setTextFilter }    from './actions/filters';
import { addExpense }       from './actions/expenses';
import configureStore       from './store/configure-store';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 300, 
    createdAt: 21000
}));
store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 1250,
    createdAt: 1756
}));
store.dispatch(addExpense({
    description: 'Rent',
    amount: 7200,
    createdAt: 109500
}));


ReactDOM.render(jsx, document.getElementById('app'));