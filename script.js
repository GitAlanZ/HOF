//normal
function greet(){
    console.log("hello");
}
//higher order
function sing(callback){
    console.log("lalalalalalalla");
    callback();
}
//function that returns another
function mult(factor){
    return function(x){
        return x*factor;
    }
}

let doubler = mult(2);
let tripler = mult(3);
let quad = mult(4);

//map access each element in array and changes them
let val = [10,8,9,4,-10,-5];
let newVal = val.map(x=>x*2);
console.log(newVal);

//filter sorts out things based on condition
let answer = val.filter(function(value){
    return value<0;
})
console.log(answer);

//reduce
function sum(x, y){
    return x + y;
}

let result = val.reduce(sum);
console.log(result);

function createIncrement(step){
    return (add) => {
        return add+step;
    }
}
let add2 = createIncrement(2);


console.log(add2(5));


let func1 = (num) => {
    return num*2;
}
let func2 = (num) => {
    return Math.pow(num, 2);
}
function compose(func1, func2){
    return (x) => {
        func2(func(x));
    }
}


console.log(compose(5));