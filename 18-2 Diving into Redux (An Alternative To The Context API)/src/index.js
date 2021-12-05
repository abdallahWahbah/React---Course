import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// only wrapped components(inside the provider) and their child components and theri children and so on, 
// will have access to redux
// so we wrap the app component so that every component in the application can acces redux
