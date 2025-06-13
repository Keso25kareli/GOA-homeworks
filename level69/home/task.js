//task2

function arrayLength(arr) {
    return arr.length;
};

//task3

function newLength(arr, val) {
    arr.push(val)
    return arr.length
};

//task4

function lastEl(arr) {
    return arr.pop();
};

//task6

function sumOfArr(arr) {
    let sum = 0;
    for(let i = 0; i  < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
};

//task5

function newArr(arr1, arr2) {
    combined = arr1.concat(arr2);
    combined.push('new');
    return combined.length;
};




//task8

function stringLength(arr) {
    let newArr = [];
    for(let i = 0; i < arr; i++) {
        newArr.push(arr[i].length);
    };
    return newArr;
};


//task7
function evenIndex(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    };
    return newArr;
};



//consol.log

console.log(arrayLength([0, 1, 2, 3, 4, 5, 6]));
console.log(newLength([0, 1, 2, 3, 4, 5, 6], 'value'));
console.log(lastEl([0, 1, 2, 3, 4, 5, 6]));
console.log(sumOfArr([0, 1, 2, 3, 4, 5, 6]));
console.log(newArr([0, 1, 2, 3, 4, 5, 6], ['a', 'b', 'c', 'd', 'e', 'f']));
console.log(stringLength([0, 1, 2, 3, 4, 5, 6]));
console.log(evenIndex([0, 1, 2, 3, 4, 5, 6]));
