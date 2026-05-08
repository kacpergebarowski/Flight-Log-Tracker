let total = 0;

window.onload = function () {
  loadFlights();
};

function addFlight() {
  const date = document.getElementById("date").value;
  const aircraft = document.getElementById("aircraft").value;
  const aircraftIdent = document.getElementById("aircraftIdent").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const remarks = document.getElementById("remarks").value;
  const hours = document.getElementById("hours").value;

  const flight = {
    date: date,
    aircraft: aircraft,
    aircraftIdent: aircraftIdent,
    from: from,
    to: to,
    remarks: remarks,
    hours: hours
  };

  let flights = JSON.parse(localStorage.getItem("flights")) || [];

  flights.push(flight);

  localStorage.setItem("flights", JSON.stringify(flights));

  displayFlight(flight);

  document.getElementById("date").value = "";
  document.getElementById("aircraft").value = "";
  document.getElementById("aircraftIdent").value = "";
  document.getElementById("from").value = "";
  document.getElementById("to").value = "";
  document.getElementById("remarks").value = "";
  document.getElementById("hours").value = "";
}

function displayFlight(flight) {
  const table = document.getElementById("flightTable");

  const newRow = table.insertRow();

  newRow.insertCell(0).innerHTML = flight.date;
  newRow.insertCell(1).innerHTML = flight.aircraft;
  newRow.insertCell(2).innerHTML = flight.aircraftIdent;
  newRow.insertCell(3).innerHTML = flight.from;
  newRow.insertCell(4).innerHTML = flight.to;
  newRow.insertCell(5).innerHTML = flight.remarks;
  newRow.insertCell(6).innerHTML = flight.hours;

  const deleteCell = newRow.insertCell(7);

  deleteCell.innerHTML = "<button onclick='deleteFlight(this, " + flight.hours + ")'>Delete</button>";

  total = total + parseFloat(flight.hours);

  document.getElementById("totalHours").innerHTML = total;
}

function loadFlights() {
  let flights = JSON.parse(localStorage.getItem("flights")) || [];

  for (let i = 0; i < flights.length; i++) {
    displayFlight(flights[i]);
  }
}

function deleteFlight(button, hours) {
  const row = button.parentNode.parentNode;

  row.remove();

  total = total - parseFloat(hours);

  document.getElementById("totalHours").innerHTML = total;
}
