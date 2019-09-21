import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {
    //un ComponentFixture un wrapper para un componente pero con más funcionalidad 
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        //vamos a crear un módulo específicamente para testing
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            //no lanzar error si encuentra un atributo o elemento no conocido en el html del template (solo para este móodulo)
            //pero ojo! esto causa que se oculten errores 
            schemas: [NO_ERRORS_SCHEMA]
            
        });
        fixture = TestBed.createComponent(HeroComponent);
    })

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })

    //Testing rendered HTML: testear que el template es correcto
    it('should render the hero name un an anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        //le dice al componente que corra la detección de cambios y actualice los bindings
        fixture.detectChanges();

        //debugElement es un wrater del DOM node
        let debugElementAnchorTag = fixture.debugElement.query(By.css('a'));
        expect(debugElementAnchorTag.nativeElement.textContent).toContain('SuperDude');
        
        //nativeElement expone la DOM api
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    })
})