import React from 'react';
import { Provider } from "react-redux";
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import RawInputContainer from '../../containers/play/RawInputContainer';
import { Router } from 'react-router-dom';
import History from '../../routes/History';
import * as actions from '../../containers/play/redux/actions/PlayAction';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Play Container', () => {

    let store;
    let wrapper;

    it('renders without crashing', () => {
        const initialState = {
            play: {
                position: null,
                type: null,
                history: []
            }
        }
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <Router history={History}>
                    <RawInputContainer/>
                </Router>
            </Provider>
        );

        expect(wrapper.find('.table-drone').length).toBe(1);
        expect(wrapper.find('#drone').length).toBe(0);
    })

    it('renders with drone position', () => {

        const initialState = {
            play: {
                position: {
                    x: 0,
                    y: 2,
                    f: 3
                },
                type: null,
                history: []
            }
        }
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <Router history={History}>
                    <RawInputContainer/>
                </Router>
            </Provider>
        );

        expect(wrapper.find('#drone').length).toBe(1);
    })
})
