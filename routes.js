let express = require('express');
let router = express.Router();
var travelerController = require('./controllers/travelerController');
var reservationController = require('./controllers/reservationController');


router.get('/addReservation', reservationController.addReservation);
router.post('/newReservation', reservationController.newReservation);
router.get('/addTraveler', travelerController.addTraveler);
router.post('/newTraveler', travelerController.newTraveler);




module.exports = router;