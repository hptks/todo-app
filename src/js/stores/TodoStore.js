import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos=[
			{
				id: 123123,
				text: 'Hi there chimp!'
			},
			{
				id: 2354263,
				text: 'Wow how freaky!'
			}
		];
	}

	createTodo(text) {
		const id=Date.now();
		this.todos.push({
			id,
			text
		});

		this.emit('change');
	}

	handleAction(action) {
		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
		}
	}

	getTodos() {
		return this.todos;
	}
}

const todoStore=new TodoStore;

dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;