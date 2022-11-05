// how to create a promise: (pending, resolve, reject)
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;
    if (completedPromise) {
        resolve('complete promise1');
    }
    else {
        reject('not completed')
        // reject(new Error('not completed'))
    }
});
// promise1.then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err);
//     })
// // console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
    resolve ('resolve completed 2');
})
// promise2.catch((err) => console.log(err))

Promise.all([promise1, promise2])
.then(([res1,res2]) => console.log(res1,res2))