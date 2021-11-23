import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe('Pruebas en 09-promesas.js', () => { 
    test('Prueba en el metodo getHeroes async', ( done ) => { //Al usar promesas utilizar el done
        const id = 1;

        getHeroeByIdAsync(id).then(heroe => {
            //expect(true).toBe(false);//Pasa la prueba por que omite el toBe para ello debemos utilizar el done
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });

    test('Debe de obtener un error si el heroe por id no existe', ( done ) => { 
        const id = 10;

        getHeroeByIdAsync(id).catch( error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    })
});
