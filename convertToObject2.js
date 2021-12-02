function solveSecondTime (input){
    let person = JSON.parse(input);
    
    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
    
    
    }
    
    solveSecondTime('{"name": "George", "age": 40, "town": "Sofia"}')