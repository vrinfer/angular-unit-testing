//una función de jasmine que nos permite agrupar tests
//el primer parámetro la describe y el segundo es la función del test (un callback)
describe('my first test', () => {
    let sut; //system under test

    //setup que va a correr antes de cada test para asegurarnos que el estado siempre es el mismo 
    //y no está sucio de tests viejos
    beforeEach(() => {
        sut = {}
    })

    //Aca voy a escribir el test posta
    //dos parámetros, el primero es el nombre que lo vamos a ver si y cuando falle el test
    //segundo parámerto también un callback
    it('should be true if true', () => {
        // arrange
        sut.a = false;

        // act
        sut.a = true;

        // assert
        expect(sut.a).toBe(true);
    })
})