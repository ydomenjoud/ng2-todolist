import { Component } from '@angular/core'
import {TodosComponent, TodoService} from "./todos/";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TodosComponent],
  providers: [TodoService]
})
export class AppComponent {

}
