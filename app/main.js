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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var TaskService = (function () {
    function TaskService(_http) {
        this._http = _http;
    }
    TaskService.prototype.getTasks = function () {
        //console.log("getting tasks");
        var _this = this;
        var aPromise = this._http.get("/tasks.json")
            .map(function (response) { return response.json().data; })
            .toPromise();
        aPromise.then(function (tasksFromServer) { return _this.tasks = tasksFromServer; });
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
var OtherComponent = (function () {
    function OtherComponent() {
    }
    OtherComponent.prototype.ngOnInit = function () { };
    OtherComponent = __decorate([
        core_1.Component({
            selector: 'other',
            template: "\n\t<h3>Other Component</h3>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], OtherComponent);
    return OtherComponent;
}());
exports.OtherComponent = OtherComponent;
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.toggle2 = true;
        this.people = ["Person1", "Person2", "Person3"];
        this.num = 7;
        this.num2 = [7, 12, 14];
        this.toggle = false;
        this.sample = "";
    }
    //ngOnInit() { }
    TasksComponent.prototype.ngOnInit = function () {
        this.taskService.getTasks();
    };
    TasksComponent.prototype.onClick = function () {
        alert("Button Clicked!");
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            providers: [TaskService],
            template: "\n\t<h4 [class.red]=\"toggle\">This is the Tasks Component</h4>\n\t<h4 [ngClass]=\"{ red: toggle }\">This is the Tasks Component</h4>\n\t<h4 [ngClass]=\"{ red: toggle, blue: !toggle }\">This is the Tasks Component</h4>\n\t<h5 *ngIf=\"toggle2\">Hello World!</h5>\n\t<ul>\n\t\t<li *ngFor=\"let person of people\">\n\t\t\t{{ person }}\n\t\t</li>\n\t</ul>\n\t<span>{{num}}</span>\n\t<br />\n\t<span>{{num2 | json}}</span>\n\t<br />\n\t<button (click)=\"onClick()\">Click me!</button>\n\t<br />\n\t<button (mouseenter)=\"onClick()\">Click me!</button>\n\t<br />\n\t<input [(ngModel)]=\"sample\">\n\t<span>{{sample}}</span>\n\t<br />\n\t{{ taskService.tasks | json }}\n\t<ul>\n\t\t<li *ngFor=\"let task of taskService.tasks\">\n\t\t\t{{ task.title }}\n\t\t</li>\n\t</ul>\n\t",
            styles: [".red { color: red }", ".blue { color: blue }"],
        }), 
        __metadata('design:paramtypes', [TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, TasksComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            template: "\n\t<h1>Hello World!</h1>\n\t<h4>Other stuff here...</h4>\n\t<a href=\"\" [routerLink]=\"['Tasks']\">Tasks</a>\n\t<a href=\"\" [routerLink]=\"['Other']\">Other</a>\n\t<router-outlet></router-outlet>\n\t"
        }),
        router_deprecated_1.RouteConfig([
            { path: '/tasks', name: 'Tasks', component: TasksComponent, useAsDefault: true },
            { path: '/other', name: 'Other', component: OtherComponent, useAsDefault: false }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map