import { MessageService } from "./message.service";

describe('MessageService', () => {

    let service: MessageService;

    //De vuelta, con esto me aseguro que para cada test voy a tener un MessageService nuevo
    beforeEach(() => {
        service = new MessageService();
    })

    it('should have no message to start', () => {
        expect(service.messages.length).toBe(0);
    })

    it('should add a message when add is called', () => {
        service.add('message1');

        expect(service.messages.length).toBe(1);
    })

    it('should remove all messages when clear is called', () => {
        // arrange
        service.add('message1');

        // act
        service.clear();

        // assert
        expect(service.messages.length).toBe(0);
    })
})