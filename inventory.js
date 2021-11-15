function solve(arr){
let heroes = [];
for(let line of arr){

let [hero, level, items] = line.split(' / ')
level = Number(level)
items = items.split(', ').sort((a,b) => a.localeCompare(b)).join(', ');
let heroesObj = {

    Hero:hero,
level,
items
}


heroes.push(heroesObj);
}

console.log(heroes);
heroes.forEach(hero => {
console.log(`Hero: ${hero.Hero}`);
console.log(`level => ${hero.level}`);
console.log(`items => ${hero.items}`);
})

}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )