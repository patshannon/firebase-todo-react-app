import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		//this code here fires when the app.js loads
		db.collection('todos')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setTodos(
					snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().text }))
				);
			});
	}, []);

	//empty array this will run ONCE
	//dependency when app loads and when the dependency changes (watching for changes)

	const addToDo = (e) => {
		e.preventDefault();
		db.collection('todos').add({
			text: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	return (
		<div className='App'>
			<h1 style={{ marginBottom: '40px' }}>Pat's Firebase Todo App</h1>
			<form class='form-wrapper'>
				<TextField
					type='text'
					id='standard-basic'
					label='Write a task'
					variant='standard'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button
					disabled={!input}
					style={{ marginTop: '12px', marginLeft: '16px' }}
					variant='contained'
					type='submit'
					onClick={addToDo}
				>
					Add ToDo
				</Button>
			</form>
			{todos.map((todo) => (
				<Todo todo={todo} />
			))}
		</div>
	);
}

export default App;
