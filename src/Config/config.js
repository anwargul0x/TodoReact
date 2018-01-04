import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAsIZoBq854stlrx8JIQvZKlnr_PVbas-I",
    authDomain: "todo-app-2018.firebaseapp.com",
    databaseURL: "https://todo-app-2018.firebaseio.com",
    projectId: "todo-app-2018",
    storageBucket: "todo-app-2018.appspot.com",
    messagingSenderId: "548769972334"
};
firebase.initializeApp(config);

// let rootRef = firebase.database().ref();
// rootRef.once('value')
// .then((snapshot)=>{
//     var data =  snapshot.val();
//     console.log(data)
// })
// .catch((error)=>{
//     console.log('there is an error. '+error);
// });
// let database = firebase.database();
// database.ref().set({
//     name:'anwar gul',
//     age:23,
//     attributes:{
// height:"",
// weight:""
//     }

// });
// database.ref('attributes/height').set("89 pounds");
// database.ref('attributes/weight').set("90 pounds");
