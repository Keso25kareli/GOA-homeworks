let academy = {
    name: 'GOA',
    courses: 'web development',
    reviews: {
        user1: {
            name: 'lika',
            status: 'child',
            review: 'positive'
        },
        user2: {
            name: 'maka',
            status: 'child',
            review: 'positive'
        },
        user3: {
            name: 'nika',
            status: 'child',
            review: 'positive'
        }
        
    }
}

let newObject = {
    member: 'member'
}

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log(Object.hasOwn(academy, 'courses'));

let combinedObject = Object.assign(academy, member);

console.log(combinedObject);

Object.freeze(combinedObject);

console.log(Object.isFrozen(combinedObject));