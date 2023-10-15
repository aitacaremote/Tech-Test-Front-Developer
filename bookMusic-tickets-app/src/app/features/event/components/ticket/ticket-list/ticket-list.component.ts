import { Component } from "@angular/core";
import { TicketItemComponent } from "../ticket-item/ticket-item.component";
import { SearchTicketsComponent } from "../search-tickets/search-tickets.component";

@Component({
    selector: "app-ticket-list",
    standalone: true,
    imports: [TicketItemComponent, SearchTicketsComponent],
    templateUrl: "./ticket-list.component.html",
})

export class TicketListComponent {
    
}