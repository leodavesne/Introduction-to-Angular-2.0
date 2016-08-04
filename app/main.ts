import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'tasks',
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
	`,
	styles: [".red { color: red }", ".blue { color: blue }"],
})
export class TasksComponent implements OnInit {
	toggle2: boolean = true;
	people: Array<string> = ["Person1", "Person2", "Person3"];

	num: number = 7;
	num2: Array<number> = [7, 12, 14];

	constructor() { }

	toggle: boolean = false;

	ngOnInit() { }

	onClick() {
		alert("Button Clicked!");
	}

	sample: string = "";
}

@Component({
	selector: 'my-app',
	directives: [TasksComponent],
	template: `
	<h1>Hello World!</h1>
	<tasks></tasks>
	`
})
export class AppComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}

bootstrap(AppComponent);
