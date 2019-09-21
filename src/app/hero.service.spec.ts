import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";


describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let heroService: HeroService;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);

        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                HeroService,
                {provide: MessageService, useValue: mockMessageService}
            ]
        })

        httpTestingController = TestBed.get(HttpTestingController);

        //Con TestBed.get obtengo la instancia de un servicio
        heroService = TestBed.get(HeroService);
        // let messageService = TestBed.get(MessageService);
    });

     describe('getHero', () => {
    //     it('should call get with the correct URL', 
    //         inject([
    //             HeroService, 
    //             HttpTestingController], 
    //             (
    //                 service: HeroService, 
    //                 controller: HttpTestingController
    //             ) => {

    //         service.getHero(4).subscribe();
    //     }));
    

        it('should call get with the correct URL', () => {
            heroService.getHero(4).subscribe();

            const req = httpTestingController.expectOne('api/heroes/4');
            req.flush({id: 4, name:  'SuperDude', strength: 100});    
        })
    })
})