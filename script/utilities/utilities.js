function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedvalue = parseFloat(value);
  return convertedvalue;
}


function getInputInnerTextById(id) {
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
