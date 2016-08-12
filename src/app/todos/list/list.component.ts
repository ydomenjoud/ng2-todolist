import {Component, OnInit} from '@angular/core';
import {Todo} from "../shared/todo.interface";
import {TodoService} from "../shared/todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

    todos:Todo[] = [];

    constructor(public todoService:TodoService) {
        this.todos = this.todoService.list();
    }

    /**
     * create a new todo
     */
    create(){
        let todo:Todo = {id: 0,title:"", order: 2};
        this.todoService.selectedTodo = todo;
    }

    /**
     * display todo information
     * @param todo
     */
    detail(todo:Todo){
        this.todoService.selectedTodo = todo;
    }

    ngOnInit() {
    }

}
