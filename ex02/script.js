const mainTitle = document.getElementById("main-title");
const description = document.querySelector("#description");
const box = document.getElementById("box");
mainTitle.textContent = "Successfully Modified DOM Title!";
description.textContent = "The paragraph text has been updated dynamically using JavaScript.";
box.style.borderRadius = "15px";
box.classList.add("active");