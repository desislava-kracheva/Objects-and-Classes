function solveSecondTime(arr){
for (let line of arr) {

let tokens = line.split(' ')
    console.log(`${tokens[0]}, age ${tokens[1]} says Meow`);
    
}

}

solveSecondTime(['Mellow 2', 'Tom 5'])