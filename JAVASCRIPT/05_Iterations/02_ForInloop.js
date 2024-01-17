const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by apple",
};
for (const key in myObj) {
  // console.log(`${key} shortcut is ${myObj[key]}`);
}

const programming = ["cpp", "py", "js", "java", "rb"];
for (const key in programming) {
  // console.log(key) // 0 1 2 3 4
}
for (const key in programming) {
  // console.log(programming[key]);
}

// doesn't work on map will not print anything
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

for (const key in map) {
    console.log(key) // Will not Print anything because it is not iteratable by forIn loop
}
    