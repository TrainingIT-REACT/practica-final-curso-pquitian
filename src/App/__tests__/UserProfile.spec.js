import React from 'react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import UserProfile from '../views/UserProfile';
import { mount } from 'enzyme';


const middlewares = []
const mockStore = configureStore(middlewares)


// Store 
import store from '../../store';
import { logUser } from '../../actions/user';
import { BrowserRouter } from 'react-router-dom';
const initialState = {
    user: {
        isLogged: false
    }
};
const mockedStore = mockStore(initialState);

jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    useLocation: jest.fn().mockReturnValue({
        pathname: '/',
        search: '',
        hash: '',
        state: null,
        key: '5nvxpbdafa',
      }),
  };
})

describe("User Profile", () => {
    it("should show login form if user is not logged in", () => {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <UserProfile />
            </Provider>
            );
        console.log('______DEBUG_____');
        console.log(wrapper.debug());
    }) 
});