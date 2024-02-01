const container = document.querySelector(".container");
let counter = 1;

document.querySelector(".submit").addEventListener("click", () => {
  const value = document.querySelector(".screen").value;
  if (value == "") {
    document.querySelector(".warning").classList.remove("hide");
  } else {
    document.querySelector(".warning").classList.add("hide");
    const div = document.createElement("div");
    const divId = `task-${counter}`;
    div.setAttribute("id", divId);
    div.setAttribute("class", "task");
    div.innerHTML = `${value} <i class="fa-solid fa-trash" data-trash-id="${divId}"></i>`;
    container.appendChild(div);

    // Get the trash icon within the newly created div
    const trash = div.querySelector(".fa-trash");

    // Add click event listener to the trash icon
    trash.addEventListener('click', function () {
      const divIdToRemove = this.dataset.trashId;
      const divToRemove = document.getElementById(divIdToRemove);
      container.removeChild(divToRemove);
    });

    // Increment the counter for the next div
    counter++;

    // Corrected line to clear the input value
    document.querySelector(".screen").value = "";
  }
});
