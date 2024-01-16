// In Object we can use only Symbol and String as Key
// In Map we can use anything as key (String,int,array,function etc.)
// Maps are more effecient when we are quickly inserting or deleting data 

const map = new Map();
map.set(()=>{console.log(10)},"Siddhant")
map.set("Age",22)
console.log(map)