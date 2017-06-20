/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'https://unpkg.com/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'lodash':'https://unpkg.com/lodash@4.17.2',
            'reflect-metadata':'https://unpkg.com/reflect-metadata',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'typescript': 'npm:typescript/lib/typescript.js',
            'ts': 'npm:plugin-typescript/lib/plugin.js'
        },

        transpiler: 'ts',
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        packages: {
            app: {
                main: 'app/main',
                defaultExtension: 'ts'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'app/shared': { main: 'index.ts', defaultExtension: 'ts' },
            'lodash': { defaultExtension: 'js' }
        }
    });
})(this);