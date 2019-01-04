import * as types from './actions/AuthTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    session: false,
    user: {
        token: null,
    },
    errors: []
});

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case types.AUTH_USER: 
            return { ...state, 
                session: true, 
                user: action.payload, 
                errors: [] 
            };

        case types.UNAUTH_USER: 
            return state;

        default:
            return state;
    }
}
