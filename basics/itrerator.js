
// for(let i=0;i<=10;i++)
// {
//     console.log("outer loop"+ i)
//     for(let j=0;j<10;j++)
//     {
//         console.log("inner loop"+j)
//     }
// }


// for of loop :
//     it is used to iterate over array even string.

//     Syntax: 
//             for(const num of arr)
//             {

//             };

// ex:


// const arr= [1,2,3,45,6,70]


// for(const i of arr)
// {
//     console.log(i);
// }


// const greeting=" hello world"

// for(const greet of greeting)
// {
//     console.log(greet)
// }

//Maps

const map =new Map();

map.set("IN","India")
map.set("Us","united state of america")
map.set("Nz","new Zeland")
map.set("AUs", " Australia")


//console.log(map)

// for(let [key ,value] of map) // this is also called as object destructurlization

// {
//     console.log(key + ":- "  + value)
// }


// let obj=new Object();

// const key = Symbol("key");

// obj={
//     name:"Harshya",
//     [key]: "mykey",
//     location:"gujrat",
//     city: " Ahamabdab",
//     age: 20,
//     email: "Harsh@email.com"
// }

// console.log(obj)

// for(let [key ,value] of obj) // object is not iterable using for of loop
// {
//     console.log(key,":-",value)
// }


// for in loop :

// for in loop is used to iterate over the object 

// syntax:
 
// for (const key in object) {
//         console.log(key[object])
//     }

// let obj=new Object();

// const key = Symbol("key");

// obj={
//     name:"Harshya",
//     [key]: "mykey",
//     location:"gujrat",
//     city: " Ahamabdab",
//     age: 20,
//     email: "Harsh@email.com"
// }

// console.log(obj)


// for(const key in obj){
//     console.log(`key ${key} shortcut is for ${obj[key]}`);
// }


// let arr=["hitesh","Harsh","harry","Happy"]

// for(let ar in arr)
// {
//     console.log(ar); // it will only give keys of array 
//     console.log(arr[ar])//it is used to print value it is major difference between for in and for of loop for of-> 
//                         //   loop directly give values but for in loop give keys
//                         // with the help of for in we cannot iterate over map

// }


// for each loop: 
//     it is very imp loop in js it id by default injected in the array Object to iterate over arrys and its values


    // const arr=["harsh","kumar", "verma"]

    // arr.forEach((item,index,fullarray)=>
    // {
    //     console.log(item,index,fullarray)
    // })


    // const arr2=[{name:"haesh",location:"varanasi"},{name:"ajay",location:"ahemadabad"},{name:"vikram",location:"pune"}];

    // arr2.forEach((item)=>console.log(item.location)
    // )