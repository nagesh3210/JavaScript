const marvel_heros= ["ironman", "spiderman", "thor", "odin"];

 
const dc_heroes = ["superman", "batman", "flash"]



//console.log(marvel_heros.push(dc_heroes));


//console.log(marvel_heros);

const myarr=[1,2,3,[4,5,6,[456,6,43,],4],2];

console.log([...dc_heroes, ...marvel_heros]);


console.log(myarr.flat(Infinity));


console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));


const s1=100
const s2 = 200
const s3 = 300;

console.log(Array.of(s1,s2,s3));
