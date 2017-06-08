import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewsEvent } from '../newseventscomp';
import { DCEErrorHandler } from 'app/utils';
import { NEWS, EVENTS  } from 'app/mock_data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
@Injectable()
export class NewseventsService {

  constructor( private http: Http, private errhandler: DCEErrorHandler ) { }
  getNewsEvents(newsFlag: boolean, category: string): Observable<any> {
      if ( newsFlag && category === 'news' ) {
        return Observable.of( NEWS );
      } else {
        return Observable.of( EVENTS ); 
      }
      // return this.http.get('/mocks/api/NewsEvents').map(this.errhandler.responseHandler).catch((err) => { return this.errhandler.catchHandler(err, false, false); });
  }
}
