// function getType(arg) {
//     var typeOfArg = typeof arg;
//
//     if(typeOfArg === 'string'){
//         console.log("This is a string");
//     }
//
//     if (typeOfArg === 'number'){
//         console.log("this is a number");
//     }
// }
//
// getType('string');
// getType(123);



// function isPrime(number) {
//     if (number >= 1000) return false;
//     if (number == 1) return false;
//
//     for (var i = 2; i < number; i++){
//         if ((number % i) == 0){
//             return false;
//         }
//     }
//
//     return true;
//
// var isPrimeNumber = isPrime(11);
//
// if (isPrimeNumber == true){
//     console.log('число простое');
// } else if (isPrimeNumber == false){
//     console.log('число не простое');
// }



//////////////////////////////////////////// js_task2_04:

var arr=[1, 1, 1, 1];

var newArr = arr.filter(function (item) {
   return arr[item] === arr[0];
});

if (arr.length === newArr.length){
    console.log(true);
} else (console.log(false));

// console.log(newArr);