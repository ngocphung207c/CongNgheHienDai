import * as actions from './actions/PlayAction';
import {toast} from 'react-toastify';
import * as types from './actions/PlayTypes';

export const createRawInputRequestEpic = (action$, store, {playModel}) => {
    return action$
        .ofType(types.RAW_INPUT_REQUEST)
        .debounceTime(200)
        .switchMap(action =>
            playModel
                .createRawInputRequest(action.payload)
                .map(response => {
                    toast.info(`${action.payload.shortAddress} has been uploaded`);
                    return actions.createRawInputRequestSuccess(response)
                })
        );
};
