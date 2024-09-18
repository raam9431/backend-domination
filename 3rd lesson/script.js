// Understanding loops

// for forin foreach while do-while forof

// for(starting; ending; Change){}

// for(var i = 0; i<=12; i++){
//     console.log(i);
// }

// var arr = [8,34,65,34,33];

// arr.forEach(function(value, index){
//     console.log(value + 2, index);
// })

var obj = {name:"harsh", age:25}

for(var value in obj){
    console.log(value, obj[value]);
}