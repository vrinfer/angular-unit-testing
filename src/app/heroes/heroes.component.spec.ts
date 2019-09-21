import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strength: 8},
            {id: 2, name: 'Wonderful Woman', strength: 24},
            {id: 3, name: 'SuperDude', strength: 55}
        ]

        //tenemos que pasarle un array de los métodos que necesitamos
        mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    })

    //este es un stateles test: chequea que el componente cambió
    //acá voy a meter todos los tests para el método delete
    describe('delete', () => {

        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
            expect(component.heroes).not.toContain(HEROES[2]);
        })

        //ahora quiero chequear que se invocó al servicio con los parámetros correctos, para asegurarme que se impacte el cambio.
        //éste será entonces un test de interacción
        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })

        //nota una x adelante del it va a hacer que se ignore ese test.
    })
})