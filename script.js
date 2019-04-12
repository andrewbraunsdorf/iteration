const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method

var forLoop = [];

for (var i=0; i < numbers.length; i ++){
    let data = String.fromCharCode(numbers[i]);
    forLoop.push(data);
    
}
console.log("this is forLoop", forLoop.join(""));

var forEach = [];
numbers.forEach(function(e){
    // let data = String.fromCharCode(e);
    forEach.push(String.fromCharCode(e));
});
console.log(forEach.join(""));