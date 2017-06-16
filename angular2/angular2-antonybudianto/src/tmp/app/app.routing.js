"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./todolist/index");
var appRoutes = index_1.HomeRoutes.concat(index_2.TodolistRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF1RDtBQUV2RCxzQ0FBMEM7QUFDMUMsMENBQWtEO0FBRWxELElBQU0sU0FBUyxHQUNSLGtCQUFVLFFBQ1Ysc0JBQWMsQ0FDcEIsQ0FBQztBQUVXLFFBQUEsbUJBQW1CLEdBQVUsRUFFekMsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZVJvdXRlcyB9IGZyb20gJy4vaG9tZS9pbmRleCc7XG5pbXBvcnQgeyBUb2RvbGlzdFJvdXRlcyB9IGZyb20gJy4vdG9kb2xpc3QvaW5kZXgnO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICAuLi5Ib21lUm91dGVzLFxuICAgIC4uLlRvZG9saXN0Um91dGVzXG5dO1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVyczogYW55W10gPSBbXG5cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKTtcbiJdfQ==