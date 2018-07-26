
// object destructuring

// const person = {
//     name: 'Anton',
//     age: 42,
//     location: {
//         city: 'Tel-Aviv',
//         temperature: 33
//     }
// };

// const {name: firstName = 'Anonymous',age, location } = person;
// const {city, temperature: temp} = location;

// console.log(`${firstName} is ${age}`);
// console.log(`It's ${temp} in ${city}`);


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Tyan Hollyday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);

//Array destructuring
const address = ['1299 S Jupiter st.', 'Haifa', 'Israel', '112233'];
const [ , city,  state] = address;

console.log(`You're in ${city} at ${state}`);

const item = ['Coffee(hot)', '$2', '$2,5', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`Medium ${itemName} costs ${mediumPrice}`);