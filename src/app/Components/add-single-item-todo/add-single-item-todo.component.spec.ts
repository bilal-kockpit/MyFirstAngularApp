import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSingleItemTodoComponent } from './add-single-item-todo.component';

describe('AddSingleItemTodoComponent', () => {
  let component: AddSingleItemTodoComponent;
  let fixture: ComponentFixture<AddSingleItemTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSingleItemTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSingleItemTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
