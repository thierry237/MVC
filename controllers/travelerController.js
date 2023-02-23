let Traveler = require('../models/travelerModel')
let Reservation = require('../models/reservationModel')


exports.addTraveler = function (req, res) {
    let reservation = req.session.reservations;
    //console.log(reservation.placeNumber)
    res.render("addTraveler.ejs", { reservation });
}

exports.newTraveler = function (req, res) {
    if (req.session.travelers === undefined) req.session.travelers;
    let traveler = new Traveler(req.body.name, req.body.age)
    req.session.travelers = traveler;
    console.log(req.session.travelers.name.length);
    let reservation = req.session.reservations;
    //console.log(reservation.destination);
    res.render("recapInfos.ejs", { reservation, traveler });

}