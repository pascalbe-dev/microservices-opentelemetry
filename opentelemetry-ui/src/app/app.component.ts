import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<Object> = of({});

  constructor(private readonly http: HttpClient) {}

  getTodos(): void {
    if (Math.random() < 0.7) this.getTodosSuccess();
    else this.getTodosError();
  }

  getTodosSuccess(): void {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this.todos$ = this.http.get(url);
  }

  getTodosError(): void {
    const incorrectUrl = 'https://jsonplaceholder.typicode.com/todosxy';
    this.todos$ = this.http.get(incorrectUrl);
  }
}
