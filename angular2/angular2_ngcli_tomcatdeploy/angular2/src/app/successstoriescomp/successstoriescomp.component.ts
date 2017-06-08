import { Component, OnInit, Input } from '@angular/core';
import { SuccessStory, SuccessstoryserviceService } from 'app/successstoriescomp';
import { Logger, DCEErrorHandler } from 'app/utils';
@Component({
  selector: 'app-successstoriescomp',
  templateUrl: './successstoriescomp.component.html',
  styleUrls: ['./successstoriescomp.component.css']
})
export class SuccessstoriescompComponent implements OnInit {
  @Input('category') 
  myCategory: string = 'news and events';
  @Input('position')
  myPosition: string = 'left';
  sStories: SuccessStory[];
  sstories: {};
  constructor( private logger: Logger, private errorHandler: DCEErrorHandler, private ssService: SuccessstoryserviceService ) {}
  ngOnInit() {
      this.logger.dbgLog('Begin Success Stories component...' + this.myCategory);
      let sStories$ = this.ssService.getSuccessStories(  this.myCategory );
      sStories$.subscribe(res => { 
          this.sstories = res; 
      });
      this.logger.dbgLog('END Success Stories component...');
  }
}
