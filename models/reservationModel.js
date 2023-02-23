class Reservation {
    constructor(destination, placeNumber) {
        this.destination = destination;
        this.placeNumber = placeNumber;


    }

    price(placeNumber) {
        this.total = placeNumber * 45;
    }
};
module.exports = Reservation;