import * as types from './PlayTypes';

export const createRawInputRequest = (rawInput) => ({
    type: types.RAW_INPUT_REQUEST,
    payload: rawInput
});
export const createRawInputRequestSuccess = (data) => ({
    type: types.RAW_INPUT_SUCCESS,
    payload: {
        data: data
    }
});
