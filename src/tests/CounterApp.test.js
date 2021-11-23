import '../setupTests';
import '@testing-library/jest-dom';

import {shallow} from 'enzyme';
import { render } from "@testing-library/react";
import CounterApp from '../CounterApp';

describe('Puebas en <CounterApp/>', () => {
    let wrapper = shallow(<CounterApp/>);//Its similar to render and allow us to render clicks

    beforeEach(() => {//It render for each test
        wrapper = shallow(<CounterApp/>);
    });

    test('Debe de mostrar <CounterApp correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();//it allow us to modify the component


    });

    //Set value to 100
    test('Debe de mostrar <CounterApp correctamente', ()=>{
        const wrapper = shallow(
            <CounterApp
                value={100}
            />
        );//Its similar to render and allow us to render clicks
        
        const valueCounter = wrapper.find('h2').text();
        expect(valueCounter).toBe(`${100}`);

    });

    test('Debe de incrementar el contador', ()=>{        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('11');

    });

    test('Debe decrementar el contador', ()=>{        
        //wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');

    });

    test('Debe presentar el valor por defecto', ()=>{        
        //wrapper.find('button').at(2).simulate('click');
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');

    });
});