
  function showViewStructureButton() {
    var feeType = document.getElementById("fee-type");
    var secondDropdownContainer = document.getElementById("secondDropdownContainer");

    if (feeType.value === "semester") {
      secondDropdownContainer.style.display = "block";
    } else {
      secondDropdownContainer.style.display = "none";
    }
    var feeTypeSelect = document.getElementById("fee-type");
    var viewStructureButton = document.getElementById("view-structure-button");

    if (feeTypeSelect.value === "general") {
        viewStructureButton.style.display = "block";
    } else {
        viewStructureButton.style.display = "none";
    }
}
