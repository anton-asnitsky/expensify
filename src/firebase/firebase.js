import  * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDj2y_UGc12pqVm1pASdUOgNtvYNXid2VQ",
    authDomain: "expensify-3f9d8.firebaseapp.com",
    databaseURL: "https://expensify-3f9d8.firebaseio.com",
    projectId: "expensify-3f9d8",
    storageBucket: "expensify-3f9d8.appspot.com",
    messagingSenderId: "1026968422552"
};
firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//     name: 'Anton Asnitsky',
//     age: 42,
//     isSIngle: false,
//     location: {
//         city: 'Hadera',
//         country: 'Israel',
//     }
// }).then(() => {
//     console.log('person data was added');
// }).catch((e) => {
//     console.log('Data update was failed: ', e);
// });

database.ref('isSIngle').remove();
