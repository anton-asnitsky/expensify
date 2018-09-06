import  * as firebase   from 'firebase';
import  moment          from 'moment';

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

export { firebase, database as default };