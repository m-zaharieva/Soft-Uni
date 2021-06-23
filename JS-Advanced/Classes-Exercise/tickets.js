function tickets(ticketDescriptions, criteria) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }

    ticketDescriptions.forEach(el => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });

    tickets
    .sort((a, b) => {
        if (typeof a[criteria] === 'string') {
            return a[criteria].localeCompare(b[criteria]);
        } else if (typeof b[criteria] === 'number') {
            return a[criteria] - b[criteria];
        }
    });

    return tickets;

}


tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination')