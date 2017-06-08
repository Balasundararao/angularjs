import { Component, Input, OnInit } from '@angular/core';
import { NewsEvent, NewseventsService } from 'app/newseventscomp';
import { Logger, DCEErrorHandler } from 'app/utils';
@Component({
  selector: 'app-newseventscomp',
  templateUrl: './newseventscomp.component.html',
  styleUrls: ['./newseventscomp.component.css']
})
export class NewseventscompComponent implements OnInit {
  @Input('category') 
  myCategory: string = 'news and events';
  @Input('position')
  myPosition: string = 'left';
  NewsEvents: NewsEvent[];
  newsFlag: boolean = true;
  newsorevents: {};
  constructor( private logger: Logger, private errorHandler: DCEErrorHandler, private neService: NewseventsService ) {}
  ngOnInit() {
      this.logger.dbgLog('Begin News Events component...' + this.myCategory);
      let newsEvents$ = this.neService.getNewsEvents( this.newsFlag, this.myCategory );
      newsEvents$.subscribe(res => { 
          this.newsorevents = res; 
          console.log( res );
      });
      this.logger.dbgLog('END News Events component...');
  }
}
