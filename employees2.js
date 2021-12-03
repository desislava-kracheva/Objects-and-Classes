function solveSecondTime(arr){

    let obj = {};
for(let line of arr){
obj[line] = line.length;


}

for( let key of Object.keys(obj)){

    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
}

}
solveSecondTime([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )