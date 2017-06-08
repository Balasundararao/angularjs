import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ExploreProgram } from '../exploreprogramcomp';
import { DCEErrorHandler } from 'app/utils';
import { PROGRAMS_HOMEPAGE, PROGRAMS_BRIEFCASE } from 'app/mock_data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
@Injectable()
export class ExploreprogramcompService {
  constructor( private http: Http, private errhandler: DCEErrorHandler ) { }
  getPrograms(newsFlag: boolean, category: string): Observable<any> {
      if ( category === 'homepage' ) {
        return Observable.of( PROGRAMS_HOMEPAGE );
      } else {
        return Observable.of( PROGRAMS_BRIEFCASE ); 
      }
      // return this.http.get('/mocks/api/NewsEvents').map(this.errhandler.responseHandler).catch((err) => { return this.errhandler.catchHandler(err, false, false); });
  }
}
