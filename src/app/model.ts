export class Model {
    public user: any;
    public items: any;

    constructor() {
        this.user = 'Ilya';
        this.items = [new TodoItem('Buy Flowers', false),
                      new TodoItem('Get Shoes', false),
                      new TodoItem('Collect Tickets', false),
                      new TodoItem('Call Joe', false)];
    }
}

export class TodoItem {
    public action: any;
    public done: any;

    constructor(action: any, done: any) {
        this.action = action;
        this.done = done;
    }
}