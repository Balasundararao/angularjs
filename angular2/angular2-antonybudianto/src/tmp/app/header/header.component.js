"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
        if (this.debugHeader) {
            console.log(this.isloggedInHeader + 'IN HEADER');
            console.log(this.fnameHeader + '' + this.lnameHeader + '' + this.levelHeader);
            console.log('END:  HEADER');
        }
    }
    return HeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "qparamsHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HeaderComponent.prototype, "isloggedInHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "fnameHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "lnameHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "levelHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "debugHeader", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'as-header',
        templateUrl: 'header.html'
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQU9qRCxJQUFhLGVBQWU7SUFPeEI7UUFDSSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsV0FBWSxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxXQUFXLEdBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztZQUNqRixPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWJZO0lBQVIsWUFBSyxFQUFFOztzREFBZTtBQUNkO0lBQVIsWUFBSyxFQUFFOzt5REFBMkI7QUFDMUI7SUFBUixZQUFLLEVBQUU7O29EQUFhO0FBQ1o7SUFBUixZQUFLLEVBQUU7O29EQUFhO0FBQ1o7SUFBUixZQUFLLEVBQUU7O29EQUFhO0FBQ1o7SUFBUixZQUFLLEVBQUU7O29EQUFhO0FBTlosZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxhQUFhO0tBQzNCLENBQUM7O0dBQ1csZUFBZSxDQWMzQjtBQWRZLDBDQUFlIiwiZmlsZSI6ImFwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXMtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdoZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBxcGFyYW1zSGVhZGVyO1xuICAgIEBJbnB1dCgpIGlzbG9nZ2VkSW5IZWFkZXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZm5hbWVIZWFkZXI7XG4gICAgQElucHV0KCkgbG5hbWVIZWFkZXI7XG4gICAgQElucHV0KCkgbGV2ZWxIZWFkZXI7XG4gICAgQElucHV0KCkgZGVidWdIZWFkZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICggdGhpcy5kZWJ1Z0hlYWRlciApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmlzbG9nZ2VkSW5IZWFkZXIgKyAnSU4gSEVBREVSJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5mbmFtZUhlYWRlciAgKyAnJyArIHRoaXMubG5hbWVIZWFkZXIgKyAnJyArIHRoaXMubGV2ZWxIZWFkZXIgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnRU5EOiAgSEVBREVSJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
