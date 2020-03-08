function sendEmail(email, movies) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`send ${movies[0]} to ${email}`);
        },4000);
    });
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        },3000);
    });
}

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve({
                id: id,
                name: 'jiji',
                isGold: true,
                email: 'xxx@gmail.com'
            });
        }, 4000); 
    });
}

async function sendMovie() {
    const customer = await getCustomer(1);
    console.log(customer);
    const movies = await getTopMovies();
    console.log(movies);
    const message = await sendEmail(customer.email, movies);
    console.log(message);
}

sendMovie();
