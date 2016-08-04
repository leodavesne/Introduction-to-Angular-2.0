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
var TasksComponent = (function () {
    function TasksComponent() {
        this.toggle2 = true;
        this.people = ["Person1", "Person2", "Person3"];
        this.num = 7;
        this.num2 = [7, 12, 14];
        this.toggle = false;
        this.sample = "";
    }
    TasksComponent.prototype.ngOnInit = function () { };
    TasksComponent.prototype.onClick = function () {
        alert("Button Clicked!");
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            template: "\n\t<h4 [class.red]=\"toggle\">This is the Tasks Component</h4>\n\t<h4 [ngClass]=\"{ red: toggle }\">This is the Tasks Component</h4>\n\t<h4 [ngClass]=\"{ red: toggle, blue: !toggle }\">This is the Tasks Component</h4>\n\t<h5 *ngIf=\"toggle2\">Hello World!</h5>\n\t<ul>\n\t\t<li *ngFor=\"let person of people\">\n\t\t\t{{ person }}\n\t\t</li>\n\t</ul>\n\t<span>{{num}}</span>\n\t<br />\n\t<span>{{num2 | json}}</span>\n\t<br />\n\t<button (click)=\"onClick()\">Click me!</button>\n\t<br />\n\t<button (mouseenter)=\"onClick()\">Click me!</button>\n\t<br />\n\t<input [(ngModel)]=\"sample\">\n\t<span>{{sample}}</span>\n\t",
            styles: [".red { color: red }", ".blue { color: blue }"],
        }), 
        __metadata('design:paramtypes', [])
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
            directives: [TasksComponent],
            template: "\n\t<h1>Hello World!</h1>\n\t<tasks></tasks>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map