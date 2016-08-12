import {Component, OnInit} from '@angular/core';
import {DetailComponent, ListComponent} from "./"; // because of index.ts

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css'],
    directives: [DetailComponent, ListComponent]
})
export class TodosComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
