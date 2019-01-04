import * as actions from '../redux/actions/AuthAction';
import * as layoutActions from '../../../components/Layout/redux/actions/LayoutAction';
import {Observable} from 'rxjs';
import {push} from 'connected-react-router'
import {toast} from "react-toastify";

export const createSessionRequestEpic = (action$, store, {authModel}) => {
    return action$
        .ofType(actions.createSessionRequest().type)
        .mergeMap(action =>
            authModel
                .provideCreateSessionRequest(action.payload)
                .map(response => {
                    return actions.createSessionSuccess(response.data.token)
                })
                .startWith(layoutActions.startPageLoading())
        );
};

export const createSessionSuccessEpic = (action$, store, {authModel}) => {
    return action$
        .ofType(actions.createSessionSuccess().type)
        .delay(500)
        .map(action => action.payload)
        .do(data => {
            authModel.saveToken(data);
        })
        .mergeMap(data =>
            Observable.merge(
                Observable.of(actions.authUser(data)),
                Observable.of(push('/play'))
            ));
};
