import { retornaArreglo } from "../../base/07-deses-arr";

describe('Prueba en 07-deses-arr', () => {
    test('Debe retornar un string y un número', () => { 
        const [letras, numeros] = retornaArreglo();

        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');
        
        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');
        
    });
})