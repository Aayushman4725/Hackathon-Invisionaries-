
  function showViewStructureButton() {
    var semesterfee= document.getElementById("table");
    var feeType = document.getElementById("fee-type");
    var secondDropdownContainer = document.getElementById("secondDropdownContainer");
    var pay= document.getElementById("pay");

    if (feeType.value === "semester") {
      secondDropdownContainer.style.display = "block";
      semesterfee.style.display = "block";
      pay.style.display="block";
    } else {
      secondDropdownContainer.style.display = "none";
      semesterfee.style.display = "none";
      pay.style.display="none";

    }
    var feeTypeSelect = document.getElementById("fee-type");
    var viewStructureButton = document.getElementById("view-structure-button");

    if (feeTypeSelect.value === "general") {
        viewStructureButton.style.display = "block";
    } else {
        viewStructureButton.style.display = "none";
    }
}
