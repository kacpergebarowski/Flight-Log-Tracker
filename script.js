let total = 0;

window.onload = function () {
  loadFlights();
};

function addFlight() {

  const date = document.getElementById("date").value;
  const aircraft = document.getElementById("aircraft").value;
  const route = document.getElementById("route").value;
  const hours = document.getElementById("hours").value;

  const flight = {
    date: date,
    aircraft: aircraft,
    route: route,
    hours: hours
  };

  let flights = JSON.parse(localStorage.getItem("flights")) || [];

  flights.push(flight);

  localStorage.setItem("flights", JSON.stringify(flights));

  displayFlight(flight);

  document.getElementById("date").value = "";
  document.getElementById("aircraft").value = "";
  document.getElementById("route").value = "";
  document.getElementById("hours").value = "";
}

function displayFlight(flight) {

  const table = document.getElementById("flightTable");

  const newRow = table.insertRow();

newRow.insertCell(0).innerHTML = flight.date;
newRow.insertCell(1).innerHTML = flight.aircraft;
newRow.insertCell(2).innerHTML = flight.route;
newRow.insertCell(3).innerHTML = flight.hours;

const deleteCell = newRow.insertCell(4);

deleteCell.innerHTML = "<button onclick='deleteFlight(this, " + flight.hours + ")'>Delete</button>";

  total = total + parseFloat(flight.hours);

  document.getElementById("totalHours").innerHTML = total;
}

function loadFlights() {

  let flights = JSON.parse(localStorage.getItem("flights")) || [];

  for (let i = 0; i < flights.length; i++) {
    displayFlight(flights[i]);
  }
  function deleteFlight(button, hours) {

  const row = button.parentNode.parentNode;

  row.remove();

  total = total - parseFloat(hours);

  document.getElementById("totalHours").innerHTML = total;
}
