class Reservation {
    constructor(destination, placeNumber) {
        this.destination = destination;
        this.placeNumber = placeNumber;


    }

    price() {
        let total = this.placeNumber * 45;
        return total;
    }
};
module.exports = Reservation;