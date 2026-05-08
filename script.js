let total = 0;

window.onload = function () {
  displayFlights();
};

function addFlight() {
  const date = document.getElementById("date").value;
  const aircraft = document.getElementById("aircraft").value;
  const aircraftIdent = document.getElementById("aircraftIdent").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const hours = document.getElementById("hours").value;
  const remarks = document.getElementById("remarks").value;

  const flight = {
    date: date,
    aircraft: aircraft,
    aircraftIdent: aircraftIdent,
    from: from,
    to: to,
    hours: hours,
    remarks: remarks
  };

  let flights = JSON.parse(localStorage.getItem("flights")) || [];

  flights.push(flight);

  localStorage.setItem("flights", JSON.stringify(flights));

  displayFlights();

  document.getElementById("date").value = "";
  document.getElementById("aircraft").value = "";
  document.getElementById("aircraftIdent").value = "";
  document.getElementById("from").value = "";
  document.getElementById("to").value = "";
  document.getElementById("hours").value = "";
  document.getElementById("remarks").value = "";
}

function displayFlights() {
  const table = document.getElementById("flightTable");

  table.innerHTML = "";
  total = 0;

  let flights = JSON.parse(localStorage.getItem("flights")) || [];

  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];

    const newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = flight.date;
    newRow.insertCell(1).innerHTML = flight.aircraft;
    newRow.insertCell(2).innerHTML = flight.aircraftIdent;
    newRow.insertCell(3).innerHTML = flight.from;
    newRow.insertCell(4).innerHTML = flight.to;
    newRow.insertCell(5).innerHTML = flight.hours;
    newRow.insertCell(6).innerHTML = flight.remarks;

    const deleteCell = newRow.insertCell(7);
    deleteCell.innerHTML = "<button onclick='deleteFlight(" + i + ")'>Delete</button>";

    total = total + parseFloat(flight.hours);
  }

  document.getElementById("totalHours").innerHTML = total;
}

function deleteFlight(index) {
  let flights = JSON.parse(localStorage.getItem("flights")) || [];

  flights.splice(index, 1);

  localStorage.setItem("flights", JSON.stringify(flights));

  displayFlights();
}
