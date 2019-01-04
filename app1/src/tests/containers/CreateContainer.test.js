import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import CreateContainer from '../../containers/auth/create/CreateContainer';
import { Router } from 'react-router-dom';
import History from '../../routes/History';

const mockStore = configureMockStore();
Enzyme.configure({ adapter: new Adapter() });

describe('Create Container', () => {
    
    const initialState = {
        auth: {
            session: false,
            user: {
                token: null,
            },
            errors: []
        }
    }
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Router history={History}>
                <CreateContainer store={store}/>
            </Router>
        );
    });

    it('renders without crashing', () => {
        expect(wrapper.find('h1').first().text()).toBe('Welcome to Drone controller');
    })

    it('validate empty input name', () => {

        wrapper.find('input[name="name"]').instance().value = '';
        wrapper.find('input[name="name"]').simulate('change');
        
        wrapper.find('button').simulate('submit');
        
        expect(wrapper.find('.invalid-feedback').length).toBe(1);
    })

    it('validate filled input name', () => {

        wrapper.find('input[name="name"]').instance().value = 'test';
        wrapper.find('input[name="name"]').simulate('change');
        
        wrapper.find('button').simulate('submit');
        
        expect(wrapper.find('.invalid-feedback').length).toBe(0);
    })
})