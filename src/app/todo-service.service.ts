import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo, Todointerface } from './todointerface';
@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private apiURL = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }
  getTodoList(): Observable<any> {
    return this.http.get<Todointerface>(this.apiURL);
  }
  addTodo(todoData: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiURL, todoData)
  }
  updateTodo(todoData:Todo):Observable<Todo>{
    let url = `${this.apiURL}TodoRUD/${todoData.id}/`;
    return this.http.put<Todo>(url,todoData)
  }
  deleteTodo(todoId: number): Observable<void> {
    let url = `${this.apiURL}TodoRUD/${todoId}/`;
    return this.http.delete<any>(url);
  }
}
