import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAppUpdateComponent } from './todo-app-update.component';

describe('TodoAppUpdateComponent', () => {
  let component: TodoAppUpdateComponent;
  let fixture: ComponentFixture<TodoAppUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAppUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoAppUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
