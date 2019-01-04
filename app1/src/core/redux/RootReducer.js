import {combineReducers} from 'redux';
import LayoutReducer from '../../components/Layout/redux/LayoutReducer';
import AuthReducer from '../../containers/auth/redux/AuthReducer';
import PlayReducer from '../../containers/play/redux/PlayReducer';

const RootReducer = combineReducers({
    layout: LayoutReducer,
    auth: AuthReducer,
    play: PlayReducer
})

export default RootReducer