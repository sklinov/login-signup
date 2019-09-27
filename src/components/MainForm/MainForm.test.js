import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr} from '../../utils/testUtils';
import { MainForm } from './MainForm'; 

const setup = (props={lang:'en'}) => {
    const component = shallow(<MainForm {...props} />);
    return component;
}


describe('Form ---',() => {
    let component;
    beforeEach(() => {
        component = setup();
    })

    describe('Renders:', () => {
        it('renders main form',()=> {
            const wrapper = findByTestAttr(component, 'main-form');
            expect(wrapper.length).toEqual(1);
        });
        it('renders login by default',()=> {
            const wrapper = findByTestAttr(component, 'login');
            expect(wrapper.length).toEqual(1);
        });
        it('does not render signup by default',()=> {
            const wrapper = findByTestAttr(component, 'signup');
            expect(wrapper.length).toEqual(0);
        });
    });
    
});