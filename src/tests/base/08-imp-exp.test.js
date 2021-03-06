import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";

describe('pruebas en el archivo 08', () => {
    test('Debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);
        expect( heroe ).toEqual(heroeData);
    })

    test('Debe retornar un undefined', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);
        expect( heroe ).toEqual(undefined);
    })

    test('Debe retornar un array con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner);
        expect( heroes ).toEqual(heroesData);
    })

    test('Debe retornar un array con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner);
        expect( heroes ).toEqual(heroesData);
    })

    
    
})