import { Store } from 'react-chrome-redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './newtab.app';

const proxyStore    = new Store({portName: 'EXAMPLE_EXT'})

proxyStore.ready().then(() => {
    ReactDOM.render(
        <Provider store={proxyStore}>
            <App />
        </Provider>
        , document.getElementById('root'));
});

