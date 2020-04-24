import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable()

export class TodoListService {

  private url = `${environment.apiBaseUrl}/v1`;

  constructor(private http: HttpClient) {
  }

  private addItem(Title): Observable<any>{
    console.log(Title);
    return this.http.post(`${this.url}/todolist`, Title)
    .pipe(
      map((res: { user: any}) => {
        console.log("#########",res);
        return res;
      })
    )
  }

  private deleteItem(id, todolist) : Observable<any>{
    return this.http.delete(`${this.url}/todolist`+id)
    .pipe(
      map((res : { user :any}) => {
        console.log(todolist);
        return res;
      })
    )
  }

  public getItems(): object[] {
    return [
      {
        title: 'Fix bugs',
        id: 1651644545,
        completed: false,
      },
      {
        title: 'Implement 30% of my feature',
        id: 1651646545,
        completed: false,
      },
      {
        title: 'Fencing',
        id: 5451646545,
        completed: true,
      },
      {
        title: 'Read an article about Test-Driven Development',
        id: 5428646545,
        completed: false,
      },
    ];
  }
}

