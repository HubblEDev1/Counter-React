import { getImagen } from "../../base/11-async-await";

describe('pruebas con async-await y fetch', () => {
    test('Debe retornar el url de la imagen', async() => {
        /*try{*/
            const url = await getImagen();
            console.log(url);
            //expect(typeof url).toBe('string'); 
            expect(url.includes('https://')).toBe(true);
            /*}catch(error){
            return error;
        }*/
    })
});