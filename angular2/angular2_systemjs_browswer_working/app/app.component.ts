import { Component } from '@angular/core';



@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {
    public appBrand: string;

    constructor() {
       // this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}

