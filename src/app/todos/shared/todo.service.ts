import {Injectable} from '@angular/core';
import {Todo} from "./todo.interface";

@Injectable()
export class TodoService {

    /**
     * Store of Todos
     * @type {{id: number; title: string; order: number}[]}
     */
    todoList:Todo[] = [
        {id: 1, title: "get some rest", order: 1}
    ];

    /**
     * Current selected TODO to share accross component
     * @type {any}
     */
    selectedTodo:Todo = null;

    constructor() { }

    /**
     * add a todo in the list
     * @param todo
     */
    add(todo:Todo){
        // build Id if creation
        if(!todo.id){
            let maxId = 0;
            for(let currentTodo of this.todoList){
                if( currentTodo.id > maxId){
                    maxId = currentTodo.id;
                }
            }
            todo.id = maxId + 1; // increase id
            this.todoList.push(todo);
        }
        this.selectedTodo = null;
    }

    /**
     * delete a todo in the list
     * @param todo
     */
    delete(todo:Todo){
        for(let currentTodo of this.todoList){
            if( currentTodo.id == todo.id ){
                let index = this.todoList.indexOf( currentTodo );
                this.todoList.splice(index, 1);
                break;
            }
        }
        this.selectedTodo = {id: 0,title:"", order: 1};
    }

    /**
     * get the todoslists
     * @return {Todo[]}
     */
    list(){
        return this.todoList;
    }

}
