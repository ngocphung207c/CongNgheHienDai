import * as types from './actions/LayoutTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isShowing: false,
});

export default (state = initialState, action = {}) => {

    switch (action.type) {
       
        case types.LAYOUT_START_LOADING: 
            return { ...state, isShowing: true };

        case types.LAYOUT_STOP_LOADING: 
            return { ...state, isShowing: false };

        default:
            return state;
    }
}

