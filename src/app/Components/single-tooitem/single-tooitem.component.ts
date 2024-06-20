import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TODOmodel } from "../../../Models/TODOmodel";


@Component({
  selector: 'app-single-tooitem',
  standalone: true,
  imports: [],
  templateUrl: './single-tooitem.component.html',
  styleUrl: './single-tooitem.component.css'
})
export class SingleTooitemComponent {
  @Input() singletodoitem!: TODOmodel;
  @Output() deletedItem = new EventEmitter<TODOmodel>();


  Ondeleteclick() {
    console.log("delete clicked");
    console.log(this.singletodoitem);
    this.deletedItem.emit(this.singletodoitem);

  }

}
