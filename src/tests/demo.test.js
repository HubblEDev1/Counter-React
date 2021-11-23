describe('Testing demo file', () => { 
    test('They have to be string', () => { 
        const mensaje = 'Hola Mundo';//initial
        const mensaje1 = `Hola Mundo`;//Stimulate
        expect(mensaje).toBe(mensaje1);//Watch the behaivor 
    });
});

