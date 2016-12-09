let {createStore} = require('redux');

let doSomething = {
    type: 'INCREASE'
};

// 1) never change state
// 2) must return state
// 3) must be pure function
let reducer = function (state = {sum: 1}, action) {
    if(action.type == 'INCREASE'){
        // NE !!!
        // state.sum = state.sum + 1;
        // return state;
        return {
            sum: state.sum + 1
        }
    } else if(action.type == 'DECREASE')
        return {
            sum: state.sum - 1
        }
    return state;
}

const store = createStore(reducer);

store.subscribe((x) => {
    console.log(store.getState());
})
store.dispatch(doSomething);
