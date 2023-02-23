let Reservation = require('../models/reservationModel')

exports.addReservation = function (req, res) {
    if (req.session.reservations === undefined) req.session.reservations;
    res.render("home.ejs");
}

exports.newReservation = function (req, res) {
    //console.log(req.body);
    let reservation = new Reservation(req.body.destination, parseInt(req.body.placesNumber))
    //console.log(reservation);
    req.session.reservations = reservation;
    //console.log(req.session.reservations);
    res.redirect("/addTraveler");

}
