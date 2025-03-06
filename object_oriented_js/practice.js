function calculatePrice(closingDate, visitDate, originalPrice) {
    let closing = new Date(closingDate);
    let visit = new Date(visitDate);

    if (visit > closing) {
        return originalPrice;
    }

    let timeDifference = closing - visit;
    let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    let weeksDifference = Math.floor(daysDifference / 7);

    let price = originalPrice;

    for (let i = 0; i < weeksDifference; i++) {
        price *= 0.9;
    }

    return price;
}

console.log(calculatePrice('2025-04-01', '2025-01-03', 100));
console.log(calculatePrice('2025-04-01', '2025-03-15', 50));
console.log(calculatePrice('2025-04-01', '2025-04-15', 75));
