import './helpers/setup_dom_env';
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from '../src/components/Todo';

Enzyme.configure({ adapter: new Adapter() });

test('actual testing for todo component', t => {
    const wrapper = mount(<Todo names={['Barrior', 'Tom']} />);

    t.is(wrapper.find('li').length, 2);
    t.is(wrapper.find('input').length, 1);
    t.is(wrapper.find('input + button').length, 1);
});