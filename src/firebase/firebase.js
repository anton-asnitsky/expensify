import  * as firebase   from 'firebase';
import  moment          from 'moment';

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

export { firebase, database as default };