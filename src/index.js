import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
    name: 'Amit'
};

function reducer(state = initialState, action) {
    console.log("")
    switch(action.type) {
        case 'CHANGE_INPUT':
            return {
                name: action.name
            };
        default:
            return state;
    }
}


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));