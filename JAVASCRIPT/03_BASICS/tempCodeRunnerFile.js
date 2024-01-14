this ==> this keyword refers the current context (values)
const user = {
    name:"Siddhant",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to our Website`);
        // console.log(this) // ==>print current context 
    }
}