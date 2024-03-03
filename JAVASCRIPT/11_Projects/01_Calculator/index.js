const buttons = document.querySelectorAll(".operations");
let str = "";
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "M+") {
      // M+
      str = "";
      document.querySelector("input").value = str;
    }
    if (e.target.innerHTML == "C") {
      // C
      str = "";
      document.querySelector("input").value = str;
    } else if (e.target.innerHTML == "=") {
      // =
      try {
        str = eval(str);
        document.querySelector("input").value = str;
      } catch {
        document.querySelector("input").value = "Error";
      }
    } else {
      if (
        str.length !== 0 &&
        (e.target.innerHTML == "-" ||
          e.target.innerHTML == "+" ||
          e.target.innerHTML == "/" ||
          e.target.innerHTML == "*" ||
          e.target.innerHTML == "%" ||
          e.target.innerHTML == ".")
      ) {
        console.log("Entered: ");
        let tempstr = str[str.length - 1];
        if (
          tempstr == "-" ||
          tempstr == "/" ||
          tempstr == "+" ||
          tempstr == "*" ||
          tempstr == "%" ||
          tempstr == "."
        ) {
          str = str.slice(0, -1) + e.target.innerHTML;
          console.log("Entered: ");
        } else str = str + e.target.innerHTML;
      } else {
        str = str + e.target.innerHTML;
        console.log(str);
      }
      document.querySelector("input").value = str;
    }
  });
});
