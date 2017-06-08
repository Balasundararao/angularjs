1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.




//######

import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,    // fully resolved filename; defined at module load time
  selector: 'contacts-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
}



{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5"
  }
}