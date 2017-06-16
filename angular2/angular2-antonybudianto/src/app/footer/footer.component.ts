import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'as-footer',
  templateUrl: 'footer.html'
})
export class FooterComponent implements OnInit {

  constructor() {
    console.log('Footer Component');
  }

  ngOnInit() {
    console.log( 'Footer Component' );
  }

}
