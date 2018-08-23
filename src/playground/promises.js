const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Anton',
        //     age: 42
        // });
        reject('Something went wrong');
    }, 5500);
});

console.log('before');
promise
    .then((data) => {
        console.log('1', data);
    })
    .catch((error) => {
        console.log(error);
    });

console.log('after');