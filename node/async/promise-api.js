//const p = Promise.resolve({ id:1 });
//const w = Promise.reject(('reason for rejection'));
//p.then(resolve => console.log(resolve));
//w.catch(err =>console.log(err));
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async...value 1');
        resolve(1);
    },2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async...value 2');
        resolve(2);
    },1000);
});

Promise.race([p1,p2])
    .then(result => console.log(result));
