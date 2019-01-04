import store from '../../core/redux/Store';
import * as layoutActions from '../../components/Layout/redux/actions/LayoutAction';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs';
import _ from 'lodash';

export default class ApiBase {

    constructor() {
        this.baseApiUrl = process.env.REACT_APP_API_URL;
    }

    ajaxRequest = (requestData, type) => {
        // const token =  localStorage.getItem('token');
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTM3MThjYzVjMmU2MmQzNzBhNGE0YiIsImlhdCI6MTU0NTQwNzU4NSwiZXhwIjoxNTQ1NDExMTg1fQ.DWt4qQ_l_vyYF-gVj4RJETyAmyAjLgqy8vVCpV5qLPQ';
        console.log('ajaxRequest token = %s', token);
        return ajax({
            url: requestData.url,
            method: type,
            headers: {
                'x-access-token': token
            },
            crossDomain: true,
            body: requestData.data
        })
            .map(rawResponse => rawResponse.response)
            .do(() => {
                store.dispatch(layoutActions.stopPageLoading());
            })
            .catch(error => {
                store.dispatch(layoutActions.stopPageLoading());
                return Observable.of(error);
            })
            .filter(response => !_.has(response.response, 'code'));
    };

    callPost = (requestData) => {
        return this.ajaxRequest(requestData, 'POST');
    };

    callPut = (requestData) => {
        return this.ajaxRequest(requestData, 'PUT');
    };

}
