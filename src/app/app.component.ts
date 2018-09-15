import { Component } from '@angular/core';

class Item {
    constructor(
        private readonly purchase: string,
        private readonly done: boolean,
        private readonly price: number
    ) {}
}

@Component({
    selector: 'purchase-app',
    template: `<div><h1>List of products</h1></div>`
})
export class AppComponent {}