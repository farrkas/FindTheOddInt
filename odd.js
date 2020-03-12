*Given an array, find the integer that appears an odd number of times.
There will always be only one integer that appears an odd number of times.*/

function odd(arr) {

    arr.sort();
    //var tab = arr.map(el => arr.indexOf(el));

    for (i = 0; i <= arr.length, i = arr.lastIndexOf(arr[i]) + 1;) {
        let dlugosc = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;

        if (dlugosc % 2 != 0) {
            console.log(arr[i]);
            break;
        }

    }
    // var filtr=arr.filter((element,index) => {element=arr[tab[index]]});

}
odd([5, 5, 8, 8, 6, 6, 3, 3, 1, 1, 1, 7, 7, 7, 7, 4, 4, 4, 4, 4, 4]);