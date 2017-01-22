import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDuic5skUoOaQeStrYVqWX1WljHkDLQugY",
    authDomain: "react-todo-app-98dbf.firebaseapp.com",
    databaseURL: "https://react-todo-app-98dbf.firebaseio.com",
    storageBucket: "react-todo-app-98dbf.appspot.com",
    messagingSenderId: "708118704263"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo Application',
    version: '1.0.1'
  },
  isRunning: true,
  user: {
    name: 'Kevin',
    age: 22
  }
})

var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('New Todo Added: ', snapshot.key, snapshot.val());
})

todosRef.push({
  text: 'New todo!'
})

todosRef.push({
  text: 'Second New todo!'
})





// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database ', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value', e);
// })
// var logDate = (snapshot) => {
//   console.log('Got value ', snapshot.val());
// }
// firebaseRef.on('value', )
//
// firebaseRef.off(logDate);
//
// firebaseRef.update({isRunning: false})


// var userData = (snapshot) => {
//   console.log('Got value ', snapshot.val())
// }

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed ', snapshot.val())
// })
//
//
// firebaseRef.child('user').update({name: 'Not Kevin'})
// firebaseRef.child('app').update({name: 'Todo App'})

// firebaseRef.off(userData)




// var notesRef = firebaseRef.child('notes')
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child Added: ', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child Changed: ', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child Removed: ', snapshot.key, snapshot.val());
// })
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('New id: ', newNoteRef.key)
