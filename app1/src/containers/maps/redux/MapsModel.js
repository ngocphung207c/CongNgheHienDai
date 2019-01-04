export default class MapsModel {

    constructor(api) {
        this.api = api;
    }

    createFinedInputRequest = (data) => {
        return this.api.createFinedInputRequest(data);
    };
}
