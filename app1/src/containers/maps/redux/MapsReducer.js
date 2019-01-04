import * as types from './actions/MapsTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    position: null,
    type: null,
    history: []
});

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case types.FINED_INPUT_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
}
