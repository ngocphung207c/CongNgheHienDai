export default class AuthModel {

    constructor(api) {
        this.api = api;
    }

    provideCreateSessionRequest = (credentialData) => {
        return this.api.createSessionRequest(credentialData);
    };

    saveToken = (data) => {
        localStorage.setItem('token', data.token);
        if(localStorage.getItem('token')) {
            console.log('tokenqq  = %s', JSON.stringify(data));

        } else {
            console.log('token1 = %s', JSON.stringify(data));

        }
    };

    getToken = () => {
        localStorage.getItem('token');
    }
}
