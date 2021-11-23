//import React from 'react';
import '../setupTests';
import '@testing-library/jest-dom';

import {shallow} from 'enzyme';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Puebas en <PrimeraApp/>', () => {
    /*test('Debe de mostrar un mensaje', ()=>{
        const greeting = 'Buenas tardes';
        //const wrapper = render( <PrimeraApp saludo={greeting}/> );
        //wrapper.getByText();
        const {getByText} = render( <PrimeraApp saludo={greeting}/> );
        
        expect(getByText(greeting)).toBeInTheDocument();
    })*/
    test('Debe de mostrar un mensaje', ()=>{
        const greeting = 'Buenas tardes';
        const wrapper = shallow(<PrimeraApp saludo={greeting}/>);//Its similar to render and allow us to render clicks

        expect(wrapper).toMatchSnapshot();//it allow us to modify the component


    });

    test('Debe de mostrar un mensaje', ()=>{
        const greeting = 'Buenas tardes';
        const subtitulo = 'SOy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={greeting}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);//it allow us to modify the component
    });
});