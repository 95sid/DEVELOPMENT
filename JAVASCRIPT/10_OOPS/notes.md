# Javascript and classes 
### Javascript is primarily is a prototype based language, it provides syntax for classes but prototypes works behind the scene.
### Prototype behaviour means that Js doesn't give up so easily it searches for value layer by layer towards up side (parent->grandParent->grand-grandParent) until it got null.
### because of this behaviour we got this keyword,intheritence,classes etc. in JS.  
## Array --> Object --> NULL(here prototype stops)
## Everything in JS is object.Function is also a object. function may behave like an object. 

```
function multiply5(num){
    return num*5;
}
multiply5.power = 2

console.log(multiply5(5)); // 25
console.log(multiply5.power) // 2
console.log(multiply5.prototype) // {}
```


## Here's what happens behind the scenes when the new keyword is used:

### A new object is created: The new keyword initiates the creation of a new JavaScript object.

### A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

### The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

### The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


## Parts of OOPS
- Constructor Function
- Prototypes 
- Classes 
- Instances(new,this etc..)

## 4 pillars 
- Abstraction --> Hiding details(Ex- fetch )
- Encapsulation --> wrapper on data  
- Polymorphism --> one method does multiple task 
- Inheritance
