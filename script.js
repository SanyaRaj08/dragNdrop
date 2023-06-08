
// Get the list items, left container, right container, and store the original state of the left container
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let originalState = leftBox.innerHTML; // Store the original state of the left container

// Iterate over each list item
for (let list of lists) {
  // Add dragstart event listener to each list item
  list.addEventListener("dragstart", function (e) {
    let selected = e.target.closest(".list");
    selected.style.opacity = "0.5"; // Change opacity of the dragged item for visual feedback

    // Allow dropping on the right container
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    // Handle drop event on the right container
    rightBox.addEventListener("drop", function (e) {
      // Check if the item is not already in the right container
      if (!rightBox.contains(selected)) {
        rightBox.appendChild(selected);
        selected.style.opacity = "1"; // Reset opacity after dropping the item
        selected.classList.add("success"); // Apply the success class to the dropped item
        selected = null;
      }
    });
  });
}

// Reset button event listener
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  // Reset the left container to the original state
  leftBox.innerHTML = originalState;
  // Clear the right container
  rightBox.innerHTML = "";

  // Reattach event listeners to the items in the left box
  let resetLists = document.getElementsByClassName("list");
  for (let list of resetLists) {
    // Add dragstart event listener to each list item
    list.addEventListener("dragstart", function (e) {
      let selected = e.target.closest(".list");
      selected.style.opacity = "0.5"; // Change opacity of the dragged item for visual feedback

      // Allow dropping on the right container
      rightBox.addEventListener("dragover", function (e) {
        e.preventDefault();
      });

      // Handle drop event on the right container
      rightBox.addEventListener("drop", function (e) {
        // Check if the item is not already in the right container
        if (!rightBox.contains(selected)) {
          rightBox.appendChild(selected);
          selected.style.opacity = "1"; // Reset opacity after dropping the item
          selected.classList.add("success"); // Apply the success class to the dropped item
          selected = null;
        }
      });
    });
  }
});


