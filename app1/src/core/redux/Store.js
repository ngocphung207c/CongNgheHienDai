import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';
import RootEpic from './RootEpic';
import DIProvider from '../../services/di/DIProvider';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import History from '../../routes/History';

export const diProvider = DIProvider();
const epicMiddleware = createEpicMiddleware(RootEpic, {
    dependencies: diProvider
});
 
export default createStore(
    connectRouter(History)(RootReducer),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(History),
            epicMiddleware
        )
    )   
)
