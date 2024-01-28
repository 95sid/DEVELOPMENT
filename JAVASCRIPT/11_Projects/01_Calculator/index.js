const buttons = document.querySelectorAll(".operations");
let str = "";
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "M+") {
      document.querySelector("input").value = str;
    }
    if (e.target.innerHTML == "C") {
      str = "";
      document.querySelector("input").value = str;
    } else if (e.target.innerHTML == "=") {
      try {
        str = eval(str);
        document.querySelector("input").value = str;
      } catch {
        document.querySelector("input").value = "Error";
      }
    } else {
      str = str + e.target.innerHTML;
      console.log(str);
      document.querySelector("input").value = str;
    }
  });
});
