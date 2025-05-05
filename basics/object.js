

const mySym = Symbol("key1")


const JsUser={
    name: "Hitesh",
    [mySym] : "mykey1",
    "age" : 20,
    email: "Hitesh@gmail.com",
    location:"jaipur",
    isloggedIn: false,
    lastLogin : ["monday","tuesday","thursday"]
}


console.log(JsUser);
console.log(JsUser["name"]);
console.log(JsUser["age"]);
console.log(JsUser.lastLogin);

JsUser.greeting = function(){
    console.log(`hello from ${this.name}`);
}

console.log(JsUser.greeting());


const JsUser2={
    name: "Hitesh",
    [mySym] : "mykey1",
    "age" : 20,
    email: "Hitesh@gmail.com",
    location:"jaipur",
    isloggedIn: false,
    lastLogin : ["monday","tuesday","thursday"]
}


console.log(JsUser);
console.log(JsUser["name"]);
console.log(JsUser["age"]);
console.log(JsUser.lastLogin);

JsUser.greeting = function(){
        `hello from ${this.name}`;
}

console.log(JsUser);



