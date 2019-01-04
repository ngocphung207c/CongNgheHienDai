import configureMockStore from 'redux-mock-store';
import { 
    placeActionRequestEpic, 
    moveActionRequestEpic,
    rightActionRequestEpic,
    leftActionRequestEpic,
    rollBackActionRequestEpic
} from '../../containers/play/redux/PlayEpic';
import * as actions from '../../containers/play/redux/actions/PlayAction';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { diProvider } from '../../core/redux/Store';

const mockStore = configureMockStore();

describe('fetchCommandEpic', () => {

    let store;

    beforeEach(() => {
        global.sessionStorage = jest.genMockFunction();
        global.sessionStorage.setItem = jest.genMockFunction();
        global.sessionStorage.getItem = jest.genMockFunction();
    });
  
    it('should place action success', async () => {

        store = mockStore();

        const request = {
            "x": 0,
            "y": 0,
            "f": 0
        }

        const response = {
            "x": 0,
            "y": 0,
            "f": 0
        }
        
        const playModel = diProvider.playModel;
        playModel.providePlaceActionRequest = jest.fn();
        playModel.providePlaceActionRequest.mockReturnValue(Observable.of(response));
        
        const placeActionRequestAction$ = ActionsObservable.of(actions.placeActionRequest(request));
        const placeActionRequestEpic$ = placeActionRequestEpic(placeActionRequestAction$, store, { playModel });
        const placeActionRequestResult = await placeActionRequestEpic$.toArray().toPromise();
        expect(placeActionRequestResult).toEqual(
            expect.arrayContaining([
                { 
                    type: 'SET_DRONE_POSITION_SUCCESS', 
                    payload: {
                        position: response,
                        type: "PLACE"
                    }
                }
            ]),
        );
    });

    it('should move action success', async () => {

        const initialState = {
            play: {
                position: {
                    x: 0,
                    y: 0,
                    f: 0
                },
                type: null,
                history: []
            }
        };

        store = mockStore(initialState);

        const response = {
            "x": 0,
            "y": 1,
            "f": 0
        }
        
        const playModel = diProvider.playModel;
        playModel.provideMoveActionRequest = jest.fn();
        playModel.provideMoveActionRequest.mockReturnValue(Observable.of(response));
        
        const moveActionRequestAction$ = ActionsObservable.of(actions.moveActionRequest());
        const moveActionRequestEpic$ = moveActionRequestEpic(moveActionRequestAction$, store, { playModel });
        const moveActionRequestEpicResult = await moveActionRequestEpic$.toArray().toPromise();
        
        expect(moveActionRequestEpicResult).toEqual(
            expect.arrayContaining([
                { 
                    type: 'SET_DRONE_POSITION_SUCCESS', 
                    payload: {
                        position: response,
                        type: "MOVE"
                    }
                }
            ]),
        );
    });

    it('should move action fail without first place', async () => {

        const initialState = {
            play: {
                position: null,
                type: null,
                history: []
            }
        };

        store = mockStore(initialState);

        const response = {
            "x": 0,
            "y": 1,
            "f": 0
        }
        
        const playModel = diProvider.playModel;
        playModel.provideMoveActionRequest = jest.fn();
        playModel.provideMoveActionRequest.mockReturnValue(Observable.of(response));
        
        const moveActionRequestAction$ = ActionsObservable.of(actions.moveActionRequest());
        const moveActionRequestEpic$ = moveActionRequestEpic(moveActionRequestAction$, store, { playModel });
        const moveActionRequestEpicResult = await moveActionRequestEpic$.toArray().toPromise();
        
        expect(moveActionRequestEpicResult).toEqual([]);
    });

    it('should right action success', async () => {

        const initialState = {
            play: {
                position: {
                    x: 0,
                    y: 0,
                    f: 0
                },
                type: null,
                history: []
            }
        };

        store = mockStore(initialState);

        const response = {
            "x": 0,
            "y": 0,
            "f": 1
        }
        
        const playModel = diProvider.playModel;
        playModel.provideRightActionRequest = jest.fn();
        playModel.provideRightActionRequest.mockReturnValue(Observable.of(response));
        
        const rightActionRequestAction$ = ActionsObservable.of(actions.rightActionRequest());
        const rightActionRequestEpic$ = rightActionRequestEpic(rightActionRequestAction$, store, { playModel });
        const rightActionRequestEpicResult = await rightActionRequestEpic$.toArray().toPromise();
        
        expect(rightActionRequestEpicResult).toEqual(
            expect.arrayContaining([
                { 
                    type: 'SET_DRONE_POSITION_SUCCESS', 
                    payload: {
                        position: response,
                        type: "RIGHT"
                    }
                }
            ]),
        );
    });

    it('should right action fail without first place', async () => {

        const initialState = {
            play: {
                position: null,
                type: null,
                history: []
            }
        };

        store = mockStore(initialState);

        const response = {
            "x": 0,
            "y": 0,
            "f": 1
        }
        
        const playModel = diProvider.playModel;
        playModel.provideRightActionRequest = jest.fn();
        playModel.provideRightActionRequest.mockReturnValue(Observable.of(response));
        
        const rightActionRequestAction$ = ActionsObservable.of(actions.rightActionRequest());
        const rightActionRequestEpic$ = rightActionRequestEpic(rightActionRequestAction$, store, { playModel });
        const rightActionRequestEpicResult = await rightActionRequestEpic$.toArray().toPromise();
        
        expect(rightActionRequestEpicResult).toEqual([]);
    });

    it('should left action success', async () => {

        const initialState = {
            play: {
                position: {
                    x: 0,
                    y: 0,
                    f: 0
                },
                type: null,
                history: []
            }
        };

        store = mockStore(initialState);

        const response = {
            "x": 0,
            "y": 0,
            "f": 3
        }
        
        const playModel = diProvider.playModel;
        playModel.provideLeftActionRequest = jest.fn();
        playModel.provideLeftActionRequest.mockReturnValue(Observable.of(response));
        
        const leftActionRequestAction$ = ActionsObservable.of(actions.leftActionRequest());
        const leftActionRequestEpic$ = leftActionRequestEpic(leftActionRequestAction$, store, { playModel });
        const leftActionRequestEpicResult = await leftActionRequestEpic$.toArray().toPromise();
        
        expect(leftActionRequestEpicResult).toEqual(
            expect.arrayContaining([
                { 
                    type: 'SET_DRONE_POSITION_SUCCESS', 
                    payload: {
                        position: response,
                        type: "LEFT"
                    }
                }
            ]),
        );
    });

    it('should left action fail without first place', async () => {

        const initialState = {
            play: {
                position: null,
                type: null,
                history: []
            }
        };

        store = mockStore(initialState);

        const response = {
            "x": 0,
            "y": 0,
            "f": 3
        }
        
        const playModel = diProvider.playModel;
        playModel.provideLeftActionRequest = jest.fn();
        playModel.provideLeftActionRequest.mockReturnValue(Observable.of(response));
        
        const leftActionRequestAction$ = ActionsObservable.of(actions.leftActionRequest());
        const leftActionRequestEpic$ = leftActionRequestEpic(leftActionRequestAction$, store, { playModel });
        const leftActionRequestEpicResult = await leftActionRequestEpic$.toArray().toPromise();
        
        expect(leftActionRequestEpicResult).toEqual([]);
    });

    it('should rollback action success', async () => {

        store = mockStore();

        const request = {
            "x": 0,
            "y": 0,
            "f": 0
        }

        const response = {
            "x": 0,
            "y": 0,
            "f": 0
        }
        
        const playModel = diProvider.playModel;
        playModel.providePlaceActionRequest = jest.fn();
        playModel.providePlaceActionRequest.mockReturnValue(Observable.of(response));
        
        const rollBackActionRequestAction$ = ActionsObservable.of(actions.rollBackActionRequest(request));
        const rollBackActionRequestEpic$ = rollBackActionRequestEpic(rollBackActionRequestAction$, store, { playModel });
        const rollBackActionRequestEpicResult = await rollBackActionRequestEpic$.toArray().toPromise();
        expect(rollBackActionRequestEpicResult).toEqual(
            expect.arrayContaining([
                { 
                    type: 'SET_DRONE_POSITION_SUCCESS', 
                    payload: {
                        position: response,
                        type: "ROLLBACK"
                    }
                }
            ]),
        );
    });
});
