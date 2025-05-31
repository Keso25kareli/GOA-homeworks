function Flight(id, status) {
    this.id = id;
    this.status = status;
  }
 let flight = new Flight("NGT 929", "landed");

  let message = "Flight " + flight.id + " has " + flight.status;

  console.log(message);
