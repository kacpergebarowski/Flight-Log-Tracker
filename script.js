let total = 0;

function addFlight() {

  const date = document.getElementById("date").value;
  const aircraft = document.getElementById("aircraft").value;
  const route = document.getElementById("route").value;
  const hours = document.getElementById("hours").value;

  const table = document.getElementById("flightTable");

  const newRow = table.insertRow();

  newRow.insertCell(0).innerHTML = date;
  newRow.insertCell(1).innerHTML = aircraft;
  newRow.insertCell(2).innerHTML = route;
  newRow.insertCell(3).innerHTML = hours;

  total = total + parseFloat(hours);

  document.getElementById("totalHours").innerHTML = total;

  document.getElementById("date").value = "";
  document.getElementById("aircraft").value = "";
  document.getElementById("route").value = "";
  document.getElementById("hours").value = "";
  
}
