function solve(arr){

    let obj = {};
for(let line of arr){
line = line.split(' | ');

obj={
    town: line[0],
    latitude: Number(line[1]).toFixed(2),
    longitude: Number(line[2]).toFixed(2)

}
console.log(obj);
}


}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)