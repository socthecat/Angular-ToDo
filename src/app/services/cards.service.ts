import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cards } from '../models/Cards';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=10';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Cards[]> {
    return this.http.get<Cards[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  deleteTodo(todo: Cards): Observable<Cards> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Cards>(url, httpOptions);
  }

  addTodo(todo: Cards): Observable<Cards> {
    return this.http.post<Cards>(this.todosUrl, todo, httpOptions);
  }

  isCompleted(todo: Cards): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
