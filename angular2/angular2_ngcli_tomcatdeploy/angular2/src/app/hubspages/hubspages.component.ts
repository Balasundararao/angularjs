import { Component, OnInit } from '@angular/core';
import { MyUrlResolver } from 'app/utils/my-url-resolver';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-hubspages',
  templateUrl: './saleshubs/a.html',
  // template : headerTemplate,
  styleUrls: ['./hubspages.component.css'],
  providers: [MyUrlResolver]

})
export class HubspagesComponent implements OnInit {
  hubname: '';
  a: string;
  constructor(private route: ActivatedRoute) { 
    this.a = 'b';
    this.hubname= route.snapshot.params.hubsname;
  }
  ngOnInit() {
  }

}
