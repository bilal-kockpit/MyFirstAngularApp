import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTooitemComponent } from './single-tooitem.component';

describe('SingleTooitemComponent', () => {
  let component: SingleTooitemComponent;
  let fixture: ComponentFixture<SingleTooitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTooitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTooitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
