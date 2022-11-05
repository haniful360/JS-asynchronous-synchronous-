// ===========race method==========

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve complete 1 ');
    }, 2000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve complete 2");
    }, 2000)
})
Promise.race(([promise1, promise2]))
    .then((res) => console.log(res));