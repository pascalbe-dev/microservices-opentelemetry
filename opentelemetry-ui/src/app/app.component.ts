import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<Object> = of({});

  constructor(private readonly http: HttpClient) {}

  getTodosSuccess(): void {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this.todos$ = this.http.get(url);
  }

  getTodosError(): void {
    const incorrectUrl = 'https://jsonplaceholder.typicode.com/todosxy';
    this.todos$ = this.http.get(incorrectUrl);
  }

  async getDataFromOurBackend(): Promise<void> {
    const url = 'http://localhost:8080';
    const answer = await this.http.get(url).pipe(take(1)).toPromise();
    console.log(`Response from our backend: ${JSON.stringify(answer)}`);
  }
}
