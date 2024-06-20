import { Component, EventEmitter, Output } from '@angular/core';
import { TODOmodel } from '../../../Models/TODOmodel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-single-item-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-single-item-todo.component.html',
  styleUrl: './add-single-item-todo.component.css'
})
export class AddSingleItemTodoComponent {
  title: string = "";
  desc: string = "";
  @Output() addtodo = new EventEmitter<TODOmodel>();

  AddNewTodo() {
     // Prevent the form from submitting the traditional way
    if (this.title.trim() && this.desc.trim()) {
      let newTodo: TODOmodel = {
        sno: Math.floor(Math.random() * 1000), // Generate a random serial number
        title: this.title,
        desc: this.desc,
        status: false
      };
      this.addtodo.emit(newTodo); // Emit the new todo item
      this.title = ""; // Reset form
      this.desc = ""; // Reset form
    }
  }
}
