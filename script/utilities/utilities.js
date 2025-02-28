function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedvalue = parseFloat(value);
  return convertedvalue;
}

function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedvalue = parseFloat(value);
  return convertedvalue;
}

function setInnerTextByIdAndValue(id, value) {
  document.getElementById(id).innerText = value;
}

// toggle function
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}

//   log out
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});



// for current time 
const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;