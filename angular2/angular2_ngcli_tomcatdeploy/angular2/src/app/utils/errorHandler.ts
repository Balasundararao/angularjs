import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Logger } from './logger';
@Injectable()

export class DCEErrorHandler extends ErrorHandler {
    private embedded = false;
    private test = JSON.stringify({
        '__v': 3,
        '_id': '58fe57f592041c5a2c9ec566',
        'company': 'cisco'
    });

    constructor(private router: Router,
        private logger: Logger,
        ) {
        super();
    }
    makeEmbedded() {
        this.embedded = true;
    }
    responseHandler(response) {
        try {
            let json = response.json();
            if (json.status) {
                if (json.status === 'fail') {
                    this.notificationHandler(this.test, 'error Handler', 'customer',  'fail:' + JSON.stringify(json) );
                    return json.data;
                } else if (json.status === 'error') {
                    this.notificationHandler(this.test, 'error Handler', 'customer',  'error:' + JSON.stringify(json) );
                    return json.data;
                } else if (json.status === 'success') {
                    return json.data;
                }
            }
            return json;
        } catch (err) {
          console.log(err);
        }
    }

    catchHandler(error: any, loginFlag = false, componentFlag = false) {
        try {
            let errMsg = (error.message) ? error.message :
              error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            let url = (loginFlag ? '/auth/' : '/guest/') + 'errorpage' + (this.embedded ? '/embedded' : '');

            this.logger.dbgLog('catchHandler(): errmsg=' + errMsg); // log to console instead
            if (error.status > 400 || componentFlag) {
                this.logger.dbgLog('-- routing to ' + url);
                this.notificationHandler(this.test, 'error Handler', 'customer',  'redirect' + errMsg);
                this.router.navigate([url], { preserveQueryParams: true });
            }
            return Observable.throw(errMsg);
        } catch ( err ) {
          console.log( err );
        }
    }

    notificationHandler( cust, eventType = 'error Handler', role = 'customer', note ) {
        this.logger.dbgLog( JSON.stringify(cust)  + role);
        this.logger.dbgErr(eventType, note);
    }
};
