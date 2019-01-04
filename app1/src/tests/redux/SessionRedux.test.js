import configureMockStore from 'redux-mock-store';
import { createSessionRequestEpic, createSessionSuccessEpic } from '../../containers/auth/redux/AuthEpic';
import * as actions from '../../containers/auth/redux/actions/AuthAction';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { diProvider } from '../../core/redux/Store';

const mockStore = configureMockStore();

describe('fetchSessionEpic', () => {

    let store;

    beforeEach(() => {
        store = mockStore();
        global.sessionStorage = jest.genMockFunction();
        global.sessionStorage.setItem = jest.genMockFunction();
        global.sessionStorage.getItem = jest.genMockFunction();
    });
  
    it('should create session success', async () => {

        const response = {
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzAzMjM2NjEsInN1YiI6eyJuYW1lIjoiTHV1In19.AdZCBzdJvpVGPFpPg3xaS8gtyZ9ne5dUyiWQuYSazpU"
        };
        
        const authModel = diProvider.authModel;
        authModel.provideCreateSessionRequest = jest.fn();
        authModel.provideCreateSessionRequest.mockReturnValue(Observable.of(response));
        
        const createSessionRequestAction$ = ActionsObservable.of(actions.createSessionRequest('test'));
        const createSessionRequestEpic$ = createSessionRequestEpic(createSessionRequestAction$, store, { authModel });
        const createSessionRequestResult = await createSessionRequestEpic$.toArray().toPromise();

        expect(createSessionRequestResult).toEqual(
            expect.arrayContaining([
                { 
                    type: 'CREATE_SESSION_SUCCESS', 
                    payload: response
                }
            ]),
        );
        
        const createSessionSuccessAction$ = ActionsObservable.of(actions.createSessionSuccess(createSessionRequestResult[1].payload));
        const createSessionSuccessEpic$ = createSessionSuccessEpic(createSessionSuccessAction$, store, { authModel });
        const createSessionSuccessResult = await createSessionSuccessEpic$.toArray().toPromise();
     
        expect(createSessionSuccessResult).toEqual(
            expect.arrayContaining([
                { 
                    type: 'AUTH_USER', 
                    payload: response
                }  
            ]),
        );
    });

});
