export class Logger {
    private debug;
    constructor() {
        // '+': turn string ('0' or '1') to integer; '!!': to boolean
        this.debug = false;
        if (!this.debug) {
            this.debug = (!! +this.getCookie('cce_debug')) || (!! +localStorage.getItem('cce_debug')) || false;
        }
        if (this.debug) {
            console.log('***** logger: Debug flag is SET ****');
        }
        localStorage.setItem('cce_debug', this.debug ? '1' : '0');
    }
    getDebug(): boolean {
        return this.debug;
    }
    dbgLog( msg ): void {
        if ( this.debug ) {
            console.log( msg );
        }
    };
    dbgLog2(msg, data): void {
        if (this.debug) {
          console.log(msg, data);
        }
    };
    dbgErr(msg, data): void {
        console.error(msg, data);
    };
    // getCookie...  TO DO:  Redundant function... Needs the clean up
    getCookie(cname) {
        let name = cname + '=';
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }
};
