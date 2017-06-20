import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-footer',
  templateUrl: 'app/footer/footer.html'
})
export class FooterComponent implements OnInit {

  constructor() {
    console.log('Footer Component');
  }

  ngOnInit() {
    console.log( 'Footer Component' );
  }

}
