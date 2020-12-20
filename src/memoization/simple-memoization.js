
// Takes in a function to create a memoized version of it
const memoize = (func) => {
    // cache object
    const cache = {};

    // Return a new function
    // it remembers the cache object & func
    // ...args is any number of arguments
    return (...args) => {
        // turn the arguments into string
        const argStr = JSON.stringify(args);

        // log the data
        console.log('cache', cache, !!cache[argStr]);

        // if there is a key that matches the arguments
        // inside the cache then do nothing
        // otherwise call the passed in function
        cache[argStr] = cache[argStr] || func(...args);

        // Return the value
        return cache[argStr];
    };
};

// creates a memoized function for adding
const add = memoize( (a, b) => a + b );

// Calculates and stores data in cache
console.log('First add call: ', add(1, 2));

// Returns cached value
console.log('Second add call: ', add(1, 2));

// Another call
console.log('Third add call: ', add(2,3));

// Recall the last call
console.log('Fourth add call ', add(2, 3));
