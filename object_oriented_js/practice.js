// let closingDate = new Date('2025-04-01');
// let visitDate = new Date('2025-03-03');

// console.log(closingDate); // Output: Tue Apr 01 2025 ...
// console.log(visitDate);   // Output: Mon Mar 03 2025 ...

// let timeDifference = closingDate - visitDate;

// console.log(timeDifference);

// let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
// console.log(daysDifference, 'days'); // Example output: 29 (number of days between dates)

// let weeksDifference = Math.floor(daysDifference / 7);
// console.log(weeksDifference); // Example output: 4

// let price = 100; // originalPrice
// for (let i = 0; i < weeksDifference; i++) {
//     price *= 0.9; // Multiply by 0.9 (apply 10% discount)
// }
// console.log(price); // Expected output: 65.61

function calculatePrice(visitDate, closingDate, originalPrice) {
    let closingDate = new Date('2025-04-01');
    let visitDate = new Date('2025-03-03');

    let timeDifference = closingDate - visitDate;
    let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    let weeksDifference = Math.floor(daysDifference / 7);

    let price = 100;

    for (let i = 0; i < weeksDifference; i++) {
    price *= 0.9;
    }
}