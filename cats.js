function solve(arr){

    for(let i = 0;i<arr.length; i++){

        let first = arr[i].split(' ')[0]
        let second = arr[i].split(' ')[1]
        console.log(`${first}, age ${second} says Meow`);
    }

}

solve(['Mellow 2', 'Tom 5'])