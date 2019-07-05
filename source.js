// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'success');
});

// #2) Run the above promise and make it console.log "success"
promise.then(result => console.log(result));
/* or promise.then(console.log) */

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
    setTimeout(() => {
        console.log('success');
    }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
    .catch(console.log('oops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

promise.all(urls.map(url =>
    fetch(url).then(people => peoplejson())
 )) 
    .then(array => {
        console.log('1', array[0])
        console.log('1', array[1])
        console.log('1', array[2])
        console.log('1', array[3])
    })
    .catch(error => console.log('ughh fix it', error));
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?