import React from 'react';
import { mount } from 'enzyme';

// Componente
import App from '../App';

describe(App, () => {
  it('renders correctly', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
})