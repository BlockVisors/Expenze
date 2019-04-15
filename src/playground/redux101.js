import { createStore } from 'redux';

const store = createStore((state = {count: 0 }, action) => {
    return state;
});

console.log(store.getState());

//actions - than an objec that gets set ot the store
// id like ot increment the fdount
/// id like to reset the cout to zero
// increment 

//decement--change the data store by dispatcing acton