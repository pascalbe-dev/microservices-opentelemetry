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
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this.todos$ = this.http.get(url);
  }
}
