const mainCard = document.getElementById("mainCard");
const titleText = document.getElementById("titleText");
const descText = document.querySelector(".description");
const toggleBtn = document.getElementById("toggleBtn");

titleText.textContent = "Successfully Updated Title!";
descText.textContent = "Welcome, Hashem! We are now manipulating the live DOM tree.";


mainCard.style.border = "3px solid #3498db";

toggleBtn.addEventListener("click", function() {

    mainCard.classList.toggle("active");
  
    if (mainCard.classList.contains("active")) {
        toggleBtn.textContent = "Night Mode Enabled";
    } else {
        toggleBtn.textContent = "Change Style & Text";
    }
});