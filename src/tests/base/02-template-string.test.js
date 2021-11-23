import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => { 
    test('Prueba en el metodo getSaludo', () => { 
        const name = 'Edwin';

        const greeting = getSaludo(name);
        console.log(greeting);
        expect(greeting).toBe('Hola ' + name);
    });

    test('Prueba en el metodo getSaludo', () => { 
        let name = '';

        const greeting = getSaludo();
        console.log(greeting);
        expect(greeting).toBe('Hola Carlos');
    });
    
});