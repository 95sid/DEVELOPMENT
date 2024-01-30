const submit = document.querySelector(".submit");
submit.addEventListener("click", function (e) {
  const screen = document.querySelector(".screen").value;
  if (screen == "") {
    document.querySelector('.warning').classList.remove("hide");
  } else {
    document.querySelector('.warning').classList.add("hide");
    document.querySelector(".output").innerHTML = screen;
  }
});

const clrbtn = document.querySelector(".Clear");
clrbtn.addEventListener("click",function(e){
    document.querySelector(".warning").classList.add("hide");
    document.querySelector(".output").innerHTML = "";
    document.querySelector("form").reset();
})