import {Component, OnInit} from '@angular/core';
import {Todo} from "../";
import {TodoService} from "../shared/todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {

    todo:Todo = null;

    constructor(public todoService:TodoService) {
    }

    /**
     * create a todo
     * @param todo
     */
    create(todo){
        this.todoService.add(todo);
    }

    /**
     * delete a todo
     * @param todo
     */
    delete(todo){
        this.todoService.delete(todo);
    }

    /**
     * end edition mode
     */
    cancel(){
        this.todoService.selectedTodo = null;
    }

    ngOnInit() {
    }

}
