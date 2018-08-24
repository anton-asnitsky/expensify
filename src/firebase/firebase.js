import  * as firebase from 'firebase';

const config = {
    apiKey: "your-api-key",
    authDomain: "your-app-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-backet",
    messagingSenderId: "your-messaging-id"
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
