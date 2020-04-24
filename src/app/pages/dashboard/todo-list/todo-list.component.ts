import 'material-design-lite/material';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { TodoListService } from './todo-list.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-todo-list',
  styleUrls: ['./todo-list.component.scss'],
  templateUrl: './todo-list.component.html',
  providers: [TodoListService],
})
export class TodoListComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.todo') private readonly todo = true;

  private items;
  private toDoLists;
  private createdItem = null;
  private todoItemsSubscription;

  @ViewChild('todoInput') private set todoInput(element: ElementRef) {
    if (element) {
      element.nativeElement.focus();
    }
  }
  @ViewChildren('listItem') private todoItems: QueryList<ElementRef>;
  private url = `${environment.apiBaseUrl}/v1`;

  toDoLists1 = [];

  constructor(private todoListService: TodoListService, private http: HttpClient) {
    this.http.get(`${this.url}/todolist`).subscribe(data => {
      let arr = data['data'];
      arr.forEach(item => {
        console.log(item)
        item['completed'] = (item['completed'] == "true");
      })
      console.log(arr);
      this.toDoLists = arr;
    });
  }

  public ngAfterViewInit(): void {
    this.todoItemsSubscription = this.todoItems.changes.subscribe((todoItems) => {
      if (todoItems.last) {
        componentHandler.upgradeElement(todoItems.last.nativeElement.querySelector('[checkboxitem]'));
        const textField = todoItems.last.nativeElement.querySelector('.mdl-textfield');
        if (textField) {
          componentHandler.upgradeElement(textField);
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.todoItemsSubscription.unsubscribe();
  }

  private deleteItem(toDoList, index): void {
    console.log(toDoList, index)
    this.http.delete(`${this.url}/todolist/` + toDoList)
      .subscribe(data => {
        console.log(this.toDoLists, data);
        if (data['status'] == true) {
          this.toDoLists.splice(index, 1);
          console.log(this.toDoLists);
        }
      })
  }

  private createItem(title): void {
    this.createdItem = {
      title: '',
      completed: "false",
    };
  }

  private addItem(createdItem): void {
    console.log(this.createdItem)
    let dummyData = this.createdItem;
    console.log(this.toDoLists)
    this.http.post(`${this.url}/todolist`, this.createdItem)
      .subscribe(data => {
        console.log(data)
        try {
          if (data['status'] == true) {
            dummyData.id = data['data']['insertId'];
            this.toDoLists.push(dummyData);
            console.log(this.toDoLists)
          }
        } catch (e) {
          console.log(e);
        }
      })
  }

  private deleteCompletedItems(toDoLists): void {
    console.clear();
    console.log(this.toDoLists);
    this.toDoLists.forEach(element => {
      if (element['completed']) {
        this.http.delete(`${this.url}/todolist/` + element.id)
          .subscribe(data => {
            console.log(this.toDoLists, data);
          })
        console.log(element);
      }
    });
  }
}