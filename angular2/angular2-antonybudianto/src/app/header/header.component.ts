import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'as-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
    @Input() qparamsHeader;
    @Input() isloggedInHeader: boolean;
    @Input() fnameHeader;
    @Input() lnameHeader;
    @Input() levelHeader;
    @Input() debugHeader;
    constructor() {
        if ( this.debugHeader ) {
            console.log( this.isloggedInHeader + 'IN HEADER');
            console.log( this.fnameHeader  + '' + this.lnameHeader + '' + this.levelHeader );
            console.log( 'END:  HEADER');
        }
    }
}
