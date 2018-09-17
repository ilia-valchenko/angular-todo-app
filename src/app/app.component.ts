import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
import * as _ from "lodash";

@Component({
    selector: 'todo-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    private model = new Model();

    public getName(): any {
        return this.model.user;
    }

    public getIncompleteTodoItems(): any {
        return this.model.items.filter(item => !item.done);
    }

    public addItem(newItem: any): void {
        if (!_.isEmpty(newItem)) {
            this.model.items.push(new TodoItem(newItem, false));
        }
    }
}