function solve(arr){
let obj = {};

for(let i = 0; i<arr.length; i++){

let token = arr[i].split(' | ');
let town = token[0];

obj.town = token[0];
obj.latitude = Number(token[1]).toFixed(2);
obj.longitude =Number(token[2]).toFixed(2);
console.log(obj);
}


}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])