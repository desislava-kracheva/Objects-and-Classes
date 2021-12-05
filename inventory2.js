function solveSecondTime(arr) {

    
let newArr = [];  

    for (let line of arr) {

        let [hero, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
        let obj = {
            hero,
            level,
            items
        };
     
        
        
        newArr.push(obj)
       
    }
    newArr.sort((a,b) => a.level - b.level)
    .forEach(hero => {
        
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
        
    });

}

solveSecondTime([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)