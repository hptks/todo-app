import React from 'react';

import Nav from '../components/Nav';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoAction from '../actions/TodoAction';

export default class Home extends React.Component {
	constructor() {
		super();
		this.getTodo=this.getTodos.bind(this);
		this.state={
			todos: TodoStore.getTodos()
		}
	}

	componentWillMount() {
		TodoStore.on('change', this.getTodo);
	}

	componentWillUnmount() {
		TodoStore.removeListener('change', this.getTodo);
	}

	getTodos() {
		this.setState({
			todos: TodoStore.getTodos()
		});
	}

	createTodo() {
		TodoAction.createTodo(Date.now());
	}

	render() {
		const { todos }=this.state;
		const Todos=todos.map((todo) => {
			return <Todo key={todo.id} {...todo} />
		});

		return (
			<div>
				<Nav />
				<div class="container">
					<button onClick={this.createTodo.bind(this)}>Create</button>
					<ul>{Todos}</ul>
				</div>
			</div>
		)
	}
}