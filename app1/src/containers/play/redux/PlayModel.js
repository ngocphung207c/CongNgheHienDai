export default class PlayModel {

    constructor(api) {
        this.api = api;
    }

    createRawInputRequest = (data) => {
        return this.api.createRawInputRequest(data);
    };
}
