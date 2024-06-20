import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TODOmodel } from "../../../Models/TODOmodel";
import { SingleTooitemComponent } from "../single-tooitem/single-tooitem.component";
import { AddSingleItemTodoComponent } from "../add-single-item-todo/add-single-item-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, SingleTooitemComponent, AddSingleItemTodoComponent]
})
export class TodosComponent {
  todoitems: TODOmodel[] = [
    { sno: 1, title: 'Todo 1',desc:'Desc-1', status: false },
    { sno: 2, title: 'Todo 2',desc:'Desc-2' ,status: false },
    { sno: 3, title: 'Todo 3', desc: 'Desc-3', status: false },
    { sno: 4, title: 'Todo 4', desc: 'Desc-4', status: false },
    { sno: 5, title: 'Todo 5', desc: 'Desc-5', status: false },
    { sno: 6, title: 'Todo 6',desc:'Desc-6' ,status: false }
  ];


  ActionDeletion(obj: TODOmodel): void{
    let index = this.todoitems.indexOf(obj);
    console.log("Index is " + index);
     if (index > -1) {
      this.todoitems.splice(index, 1);
    }
  }
  ActionaddItemTodo(obj: TODOmodel): void {
    console.log("Add item here");
    this.todoitems.push(obj);
  }

}
