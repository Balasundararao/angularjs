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
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var TodolistModule = (function () {
    function TodolistModule() {
    }
    return TodolistModule;
}());
TodolistModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.CompletedFilterPipe,
            index_1.TodolistComponent
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule
        ],
        exports: [
            index_1.CompletedFilterPipe,
            index_1.TodolistComponent
        ]
    })
], TodolistModule);
exports.TodolistModule = TodolistModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvbGlzdC90b2RvbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsOERBQTBEO0FBQzFELHdDQUE2QztBQUM3QyxpQ0FBaUU7QUFnQmpFLElBQWEsY0FBYztJQUEzQjtJQUNBLENBQUM7SUFBRCxxQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksY0FBYztJQWQxQixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViwyQkFBbUI7WUFDbkIseUJBQWlCO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsbUJBQVc7WUFDWCxnQ0FBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLDJCQUFtQjtZQUNuQix5QkFBaUI7U0FDcEI7S0FDSixDQUFDO0dBQ1csY0FBYyxDQUMxQjtBQURZLHdDQUFjIiwiZmlsZSI6ImFwcC90b2RvbGlzdC90b2RvbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21wbGV0ZWRGaWx0ZXJQaXBlLCBUb2RvbGlzdENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb21wbGV0ZWRGaWx0ZXJQaXBlLFxuICAgICAgICBUb2RvbGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQnJvd3Nlck1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDb21wbGV0ZWRGaWx0ZXJQaXBlLFxuICAgICAgICBUb2RvbGlzdENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9kb2xpc3RNb2R1bGUge1xufVxuIl19
