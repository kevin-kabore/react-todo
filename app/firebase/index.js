import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDuic5skUoOaQeStrYVqWX1WljHkDLQugY",
      authDomain: "react-todo-app-98dbf.firebaseapp.com",
      databaseURL: "https://react-todo-app-98dbf.firebaseio.com",
      storageBucket: "react-todo-app-98dbf.appspot.com",
      messagingSenderId: "708118704263"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase
