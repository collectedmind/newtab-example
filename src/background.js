
import {wrapStore} from 'react-chrome-redux';
import { createStore } from 'redux'

export const todos = (state = {todos: []}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.text] }
        default: { return state }
    }
}

let store = createStore(todos)

// Adding timeout here to force the wrapstore to
// fire AFTER the proxyStore.ready()
setTimeout(function() {

    wrapStore(store, {portName: 'EXAMPLE_EXT'}); // make sure portName matches

}, 1500);

