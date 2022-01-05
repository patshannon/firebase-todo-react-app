import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBTTWfbLSZH7SpxL6y-eFPK56HHD7FwT0w',
	authDomain: 'todo-app-db52a.firebaseapp.com',
	databaseURL: 'https://todo-app-db52a-default-rtdb.firebaseio.com',
	projectId: 'todo-app-db52a',
	storageBucket: 'todo-app-db52a.appspot.com',
	messagingSenderId: '110765106679',
	appId: '1:110765106679:web:91658811abbfe865053af2',
	measurementId: 'G-LNM8W35FN9',
});

const db = firebase.firestore();

export default db;
