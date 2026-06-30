// Fundamentals of JavaScript:
// Arrays and Objects
// Function returns
// async js coding
// foreach map filter find indexof

var arr =[1,8,3,4,5,6]

var newArr =  arr.map(function(val){
    return val + 1
})

console.log(newArr)

var filterarr = arr.filter(function(val){
    if(val%2 ==0)return true;
})

console.log(filterarr)

var findArr = arr.find((val)=>{
    if(val %2==0)return val;
})

console.log(findArr)
console.log(arr.indexOf(8))
console.log(arr.indexOf(80))