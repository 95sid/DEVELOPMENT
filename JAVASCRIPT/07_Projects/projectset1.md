# Projects related to Dom
## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-qb1yoc?file=1-colorChanger%2Fchaiaurcode.js)
# Solution Code 

## project1 
```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener("click",function(e){
    const color = e.target.id;
    body.style.backgroundColor = color;
  })
})
```
