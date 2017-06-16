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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxpREFBZ0Q7QUFDaEQsaURBQStDO0FBQy9DLDZDQUE2RDtBQUM3RCxtQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFFdEQsOERBQTREO0FBa0I1RCxJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFNBQVM7SUFoQnJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxnQ0FBYTtZQUNiLHFCQUFZO1lBQ1osd0JBQVU7WUFDViw0QkFBWTtZQUNaLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCxxQkFBTztTQUNWO1FBQ0QsU0FBUyxFQUFFLENBQUUsNkJBQWEsRUFBRSxpQ0FBbUIsQ0FBRTtRQUNqRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO0tBQzlCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBUFBfUFJPVklERVJTIH0gZnJvbSAnLi9hcHAucHJvdmlkZXJzJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBhcHBSb3V0aW5nUHJvdmlkZXJzLCByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBOYXZiYXJNb2R1bGUgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IEhlYWRlck1vZHVsZSB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgRm9vdGVyTW9kdWxlIH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IFRvZG9saXN0TW9kdWxlIH0gZnJvbSAnLi90b2RvbGlzdC90b2RvbGlzdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTmF2YmFyTW9kdWxlLFxuICAgICAgICBIb21lTW9kdWxlLFxuICAgICAgICBIZWFkZXJNb2R1bGUsXG4gICAgICAgIEZvb3Rlck1vZHVsZSxcbiAgICAgICAgVG9kb2xpc3RNb2R1bGUsXG4gICAgICAgIHJvdXRpbmcsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgQVBQX1BST1ZJREVSUywgYXBwUm91dGluZ1Byb3ZpZGVycyBdLFxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19
