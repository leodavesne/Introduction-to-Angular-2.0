import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component, OnInit, Injectable } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Injectable()
export class TaskService {
	tasks = ["First task", "Second task", "Third task"];

	udpate() {
		
	}
}

@Component({
	selector: 'other',
	template: `
	<h3>Other Component</h3>
	`
})
export class OtherComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}

@Component({
	selector: 'tasks',
	providers: [TaskService],
	template: `
	<h4 [class.red]="toggle">This is the Tasks Component</h4>
	<h4 [ngClass]="{ red: toggle }">This is the Tasks Component</h4>
	<h4 [ngClass]="{ red: toggle, blue: !toggle }">This is the Tasks Component</h4>
	<h5 *ngIf="toggle2">Hello World!</h5>
	<ul>
		<li *ngFor="let person of people">
			{{ person }}
		</li>
	</ul>
	<span>{{num}}</span>
	<br />
	<span>{{num2 | json}}</span>
	<br />
	<button (click)="onClick()">Click me!</button>
	<br />
	<button (mouseenter)="onClick()">Click me!</button>
	<br />
	<input [(ngModel)]="sample">
	<span>{{sample}}</span>
	<br />
	{{ taskService.tasks | json }}
	<ul>
		<li *ngFor="let task of taskService.tasks">
			{{ task }}
		</li>
	</ul>
	`,
	styles: [".red { color: red }", ".blue { color: blue }"],
})
export class TasksComponent implements OnInit {
	toggle2: boolean = true;
	people: Array<string> = ["Person1", "Person2", "Person3"];

	num: number = 7;
	num2: Array<number> = [7, 12, 14];

	constructor(public taskService: TaskService) { }

	toggle: boolean = false;

	ngOnInit() { }

	onClick() {
		alert("Button Clicked!");
	}

	sample: string = "";
}

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES, TasksComponent],
	providers: [ROUTER_PROVIDERS],
	template: `
	<h1>Hello World!</h1>
	<h4>Other stuff here...</h4>
	<a href="" [routerLink]="['Tasks']">Tasks</a>
	<a href="" [routerLink]="['Other']">Other</a>
	<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{path:'/tasks', name: 'Tasks', component: TasksComponent, useAsDefault: true},
	{path:'/other', name: 'Other', component: OtherComponent, useAsDefault: false}
])
export class AppComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}

bootstrap(AppComponent);
