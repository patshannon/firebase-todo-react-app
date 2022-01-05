import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { Button, List, ListItem } from '@mui/material';
import './Todo.css';
import db from './firebase';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(props) {
	return (
		<List className='list-wrapper'>
			<ListItem className='listItem'>
				<ListItemText>{props.todo.text}</ListItemText>
			</ListItem>
			<DeleteIcon
				className='delete-icon'
				onClick={() => db.collection('todos').doc(props.todo.id).delete()}
			/>
		</List>
	);
}

export default Todo;
