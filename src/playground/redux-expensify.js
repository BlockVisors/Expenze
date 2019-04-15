import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        desciption = '',
        note = '', 
        amount = 0, 
        createdAt = 0
        } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


// REMOVE_EXPENSE
const removeExpense = ({ id:} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducser

const espensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
            return state.filter(( { id }) => id !== action.id);
            
        default:
            return state;
    }
};

// Filters REducer
// text => '', sortBy => 

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
    }
};

// get visible
const getVisibleExpenses = (expenses, filters) => {
    return expenses;
};



// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        })
    );

    store.subscribe(() => {
        const state = store.getState();
        const visibleExpense =  getVisibleExpenses(state.expenses, state.filters);

        console.log(store.getState());

    });


const expenseOne = store.dispatch(addExpense({ desciption: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ desciption: 'Coffee', amount: 300 }));



const demoState = {
    expenses: [{
        id: 'sfhosifhspod',
        desciption: 'January Rent',
        note: 'This as tehfinsf  dpasdifd',
        amount: 32323,
        createdAt: 0

    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};