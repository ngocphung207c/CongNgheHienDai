import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './core/App';
import History from './routes/History';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
import store from './core/redux/Store'; 

ReactDOM.render(
    <Provider store={store}> 
        <Router history={History}>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
