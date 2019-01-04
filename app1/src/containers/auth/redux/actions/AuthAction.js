import * as types from './AuthTypes';

export const createSessionRequest = (credentialData) => ({
    type: types.CREATE_SESSION_REQUEST,
    payload: credentialData
});

export const createSessionSuccess = (data) => ({
    type: types.CREATE_SESSION_SUCCESS,
    payload: data
});

export const authUser = (data) => ({
    type: types.AUTH_USER,
    payload: data
});

export const unAuthUser = () => ({
    type: types.UNAUTH_USER
});
