const redux = require("redux");
// this is how we import in node.js

const counterReducer = (state = {counter: 0}, action)=>
{
    if(action.type === "increment")
    {
        return{
            counter: state.counter + 1
        }
    }
    if(action.type === "decrement")
    {
        return{
            counter: state.counter - 1
        }
    }
}

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () =>
{
    const latestState = store.getState();
    console.log(latestState);    
}

store.subscribe(counterSubscriber);
// the subscribe function will execute the function passed to it whenever the data or store changes

store.dispatch({type: "increment"})
store.dispatch({type: "decrement"})

