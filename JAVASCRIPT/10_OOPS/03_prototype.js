const name = "Siddhant    " 
const channel = "chai      "
// want a property name truelength which will give me actual length without using trim

String.prototype.truelength = function(){
    // this --> holds current context 
    console.log(`The actual length of String is ${this.trim().length}`);
}
console.log(name.truelength())
console.log(channel.truelength())

let myHeros = ["hulk","spiderman"]
let heroPower = {
    thor:"Hammer",
    spiderman:"Sling",

    getSpiderPower:function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}

// we have given a property/prototype to object so it will be persent to everyone 
// because object is ultimate parent for everyone 
Object.prototype.Siddhant = function(){
    console.log("Siddhant is present in all Object");
}
console.log(myHeros.Siddhant())
console.log(heroPower.Siddhant())

// Inheritence 
const User = {
    name:"Siddhant",
    email:"nobbie@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const Teachingsupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "Js Assignment",
    fulltime:true,
    __proto__:Teachingsupport // give access of Teachingsupport
}
Teacher.__proto__ = User


// Modern Syntax 
Object.getPrototypeOf(Teacher,Teachingsupport) //get prototype of Teacher  

