console.log('Before');
const User = getUser(1)
    .then(user => getRepo(user.gitHubUserName))
    .then(repos => console.log(repos))
    .catch(err => console.log(err));


// Async and Await
async function display() {
    try {
    const user = await getUser(1);
    const repos = await getRepo(user.gitHubUserName);
    console.log(repos[0]);
    } catch (err) {
        console.log('error:', err.message);
    }
}
display();
console.log('After');
function getUser(id) {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
        reject(new Error('cant get'));
    },2000);
    })
};

function getRepo(username) {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve([username, 'repo2', 'repo3']);
    }, 2000);
  });
}
