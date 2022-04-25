import { Publisher, Subjects, TicketUpdatedEvent } from '@takesure/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    readonly subject= Subjects.TicketUpdated
}