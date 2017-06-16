import {Component} from 'angular2/core';
import {UserDataService} from './service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    //directives: [...ROUTER_DIRECTIVES],
    templateUrl: '/app/app.html'
})

export class ContactsList {

    public onlineContacts: any;
    public userContacts: any;

    constructor (public userDataService: UserDataService) {
        this.userDataService.onlineContacts.subscribe(
            (onlineContacts) => {
                this.onlineContacts = onlineContacts;
            });

        this.userContacts = this.userDataService.userContacts;
    }
}