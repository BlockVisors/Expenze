
import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = ({ id:} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const removeExpense = ({ id:} = {}) => ({
    type: 'EDIT_EXPENSE',
    id
});