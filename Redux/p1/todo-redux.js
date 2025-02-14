const redux = require('redux');

// Actions
const ADD_TODO = 'Add TODO';
const TOGGLE_TODO = 'Toggle TODO';

// Initial State
const initialState = {
    todos: []
};

// ACTION CREATORS
const addToDo = (text) => ({ type: ADD_TODO, text });
const toggleToDo = (index) => ({ type: TOGGLE_TODO, index });

// Reducer
// must return update state
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) =>
                    i === action.index ? { ...todo, completed: !todo.completed } : todo
                )
            };

        default:
            return state;
    }
}

// Create store
const store = redux.createStore(todoReducer);

// Dispatch actions
store.dispatch(addToDo('Study at 8'));
store.dispatch(addToDo('Office at 9'));
store.dispatch(toggleToDo(0));

// Read data from store
console.log(store.getState());
