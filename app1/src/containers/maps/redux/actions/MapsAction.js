import * as types from './MapsTypes';

export const createFinedInputRequest = (rawInput) => ({
    type: types.FINED_INPUT_REQUEST,
    payload: rawInput
});
export const createFinedInputRequestSuccess = (data) => ({
    type: types.FINED_INPUT_SUCCESS,
    payload: {
        data: data
    }
});
