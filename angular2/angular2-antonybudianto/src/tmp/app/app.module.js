"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var shared_1 = require("./shared");
var home_module_1 = require("./home/home.module");
var briefcase_module_1 = require("./briefcase/briefcase.module");
var header_module_1 = require("./header/header.module");
var footer_module_1 = require("./footer/footer.module");
var todolist_module_1 = require("./todolist/todolist.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            shared_1.NavbarModule,
            home_module_1.HomeModule,
            briefcase_module_1.BriefcaseModule,
            header_module_1.HeaderModule,
            footer_module_1.FooterModule,
            todolist_module_1.TodolistModule,
            app_routing_1.routing,
        ],
        providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxpREFBZ0Q7QUFDaEQsaURBQStDO0FBQy9DLDZDQUE2RDtBQUM3RCxtQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELGlFQUErRDtBQUUvRCx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBRXRELDhEQUE0RDtBQW1CNUQsSUFBYSxTQUFTO0lBQXRCO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxTQUFTO0lBakJyQixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsZ0NBQWE7WUFDYixxQkFBWTtZQUNaLHdCQUFVO1lBQ1Ysa0NBQWU7WUFDZiw0QkFBWTtZQUNaLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCxxQkFBTztTQUNWO1FBQ0QsU0FBUyxFQUFFLENBQUUsNkJBQWEsRUFBRSxpQ0FBbUIsQ0FBRTtRQUNqRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO0tBQzlCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBUFBfUFJPVklERVJTIH0gZnJvbSAnLi9hcHAucHJvdmlkZXJzJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBhcHBSb3V0aW5nUHJvdmlkZXJzLCByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBOYXZiYXJNb2R1bGUgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IEJyaWVmY2FzZU1vZHVsZSB9IGZyb20gJy4vYnJpZWZjYXNlL2JyaWVmY2FzZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWFkZXJNb2R1bGUgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIubW9kdWxlJztcbmltcG9ydCB7IEZvb3Rlck1vZHVsZSB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUb2RvbGlzdE1vZHVsZSB9IGZyb20gJy4vdG9kb2xpc3QvdG9kb2xpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIE5hdmJhck1vZHVsZSxcbiAgICAgICAgSG9tZU1vZHVsZSxcbiAgICAgICAgQnJpZWZjYXNlTW9kdWxlLFxuICAgICAgICBIZWFkZXJNb2R1bGUsXG4gICAgICAgIEZvb3Rlck1vZHVsZSxcbiAgICAgICAgVG9kb2xpc3RNb2R1bGUsXG4gICAgICAgIHJvdXRpbmcsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgQVBQX1BST1ZJREVSUywgYXBwUm91dGluZ1Byb3ZpZGVycyBdLFxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19
