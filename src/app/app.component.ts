import { Component } from '@angular/core';
import { Model } from './model';

@Component({
    selector: 'todo-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    private model = new Model();

    public getName(): any {
        return this.model.user;
    }

    public getAllTodoItems(): any {
        return this.model.items;
    }
}