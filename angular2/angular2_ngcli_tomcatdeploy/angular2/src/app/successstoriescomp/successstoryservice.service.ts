import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SSTORIES_HOMEPAGE, SSTORIES_BRIEFCASE } from 'app/mock_data';
import { DCEErrorHandler } from 'app/utils';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class SuccessstoryserviceService {
  constructor( private http: Http, private errhandler: DCEErrorHandler ) { }
  getSuccessStories( category: string ): Observable<any> {
      if ( category === 'homepage' ) {
        return Observable.of( SSTORIES_HOMEPAGE );
      } else {
        return Observable.of( SSTORIES_BRIEFCASE ); 
      }
      // return this.http.get('/mocks/api/NewsEvents').map(this.errhandler.responseHandler).catch((err) => { return this.errhandler.catchHandler(err, false, false); });
  }
}
