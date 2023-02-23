let Traveler = require('../models/travelerModel')
let Reservation = require('../models/reservationModel')


exports.addTraveler = function (req, res) {
    let reservation = req.session.reservations;
    //console.log(reservation.placeNumber)
    res.render("addTraveler.ejs", { reservation });
}

exports.newTraveler = function (req, res) {
    if (req.session.travelers === undefined) req.session.travelers = [];
    let traveler = new Traveler(req.body.name, req.body.age);
    req.session.travelers.push(traveler);
    console.log(req.session.travelers);
    let reservation = new Reservation(req.session.reservations.destination, req.session.reservations.placeNumber);
    //console.log(reservation.destination);
    res.render("recapInfos.ejs", { reservation, travelers: req.session.travelers });

}