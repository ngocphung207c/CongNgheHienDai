import ApiBase from './ApiBase';

export default class Api {

    constructor() {
        this.apiBase = new ApiBase();
    }

    createSessionRequest = (credentialData) => {
        const requestData = {
            url: '/users/authenticate',
            data: credentialData
        };
        return this.apiBase.callPost(requestData);
    };

    createRawInputRequest = (rawData) => {
        const requestData = {
            url: '/locations',
            data: rawData
        };
        return this.apiBase.callPost(requestData);
    };
    createFinedInputRequest = (rawData) => {
        const requestData = {
            url: `/locations/${rawData.id}`,
            data: rawData
        };
        return this.apiBase.callPut(requestData);
    };
}
