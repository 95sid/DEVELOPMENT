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


## project2 
```
const form = document.querySelector('form')

form.addEventListener("submit",function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if(height<=0 || height == '' || isNaN(height)){
    result.innerHTML = "Please Enter the Valid Value"
  }
  else if(weight<=0 || weight == '' || isNaN(weight)){
    result.innerHTML = "Please Enter the Valid Value"
  }
  else{
    const bmi = (weight/(height*height)).toFixed(2);
    if(bmi < 18.6){
      result.innerHTML = `Your BMI is ${bmi} </br> You are Underweight`
    }
    else if(bmi >= 18.6 && bmi <= 24.6){
      result.innerHTML = `Your BMI is ${bmi} </br> You are in Normal Range`
    }
    else{
      result.innerHTML = `Your BMI is ${bmi} </br> You are overweight`
    }
  }
  form.reset();
})
```
