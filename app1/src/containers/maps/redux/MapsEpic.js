import * as actions from './actions/MapsAction';
import {toast} from 'react-toastify';
import * as types from './actions/MapsTypes';

export const createFinedInputRequestEpic = (action$, store, {mapsModel}) => {
    return action$
        .ofType(types.FINED_INPUT_REQUEST)
        .debounceTime(200)
        .switchMap(action =>
            mapsModel
                .createFinedInputRequest(action.payload)
                .map(response => {
                    toast.info(`${action.payload.shortAddress} has been update`);
                    return actions.createFinedInputRequestSuccess(response)
                })
        );
};
