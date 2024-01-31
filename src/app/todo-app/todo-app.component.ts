import { CommonModule } from '@angular/common';
import { Todo } from './../todointerface';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


export class NgbdPaginationBasic {
  page:number = 1;
}
@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,NgbPaginationModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent {
  pagination: NgbdPaginationBasic = new NgbdPaginationBasic();
  TodoList: Todo[] = []
  editId: any
  editTodoName: string = ''
  editdescription: string = ''
  editisDone: boolean = false
  todoName: string = ''
  tododescription: string = ''
  todoisDone: boolean = false
  editMode: boolean = false
  constructor(private TodoListData: TodoServiceService) {
  }
  ngOnInit(): void {
    this.reloadTodoList();
  }
  updateMode(Todo: any) {
    this.editId = Todo.id
    this.editTodoName = Todo.TodoName
    this.editMode = !this.editMode;
  }
  discart(tododata: Todo, objid: number) {
    let obj = this.TodoList.findIndex(todo => todo.id === objid)
    this.TodoList[obj] = tododata
    this.editId = ''
    this.editTodoName = ''
    this.editdescription=''
    this.editisDone=false
    this.editMode = !this.editMode;
  }

  reloadTodoList() {
    this.TodoListData.getTodoList().subscribe(data => {
      this.TodoList = data;
    });
  }
  onSubmit(todoName: string, tododescription: string,todoisDone: boolean) {
    this.todoName = todoName;
    this.tododescription = tododescription;
    this.todoisDone = todoisDone;

    this.TodoListData.addTodo({
      'TodoName': this.todoName, 'description': this.tododescription,
      'isDone': this.todoisDone
    }).subscribe(response => {
      this.TodoList.push(response);
    });
    this.todoName = '';
    this.tododescription ='';
    this.todoisDone =false;
  }

  update(data: any) {
    this.TodoListData.updateTodo(data).subscribe(response => {
      // this.TodoList.filter(todo=>{
      //   todo.id===this.editId
      //   console.log()
      //   })
      let obj = this.TodoList.findIndex(todo => todo.id === this.editId)
      this.TodoList[obj] = data
      this.editId = ''
      this.editTodoName = ''
      this.editMode = !this.editMode;
    })
  }
  delete(Todo: any): void {
    let todoId: any = this.TodoList.findIndex(todolist => todolist.id === Todo.id);
    if (todoId !== -1) {
      this.TodoListData.deleteTodo(Todo.id).subscribe((res: any) => {
        console.log(todoId);
        this.TodoList.splice(todoId, 1);
      })
    }
  }
}
