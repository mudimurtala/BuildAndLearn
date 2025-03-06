function calculatePrice(closingDate, visitDate, originalPrice) {
    let closing = new Date(closingDate);
    let visit = new Date(visitDate);

    // If visit date is after closing date, return original price
    if (visit > closing) {
        return originalPrice;
    }

    let timeDifference = closing - visit;
    let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    let weeksDifference = Math.floor(daysDifference / 7);

    let price = originalPrice;

    for (let i = 0; i < weeksDifference; i++) {
        price *= 0.9; // Apply 10% discount
    }

    return price;
}

// Test Cases
console.log(calculatePrice('2025-04-01', '2025-03-03', 100)); // 65.61
console.log(calculatePrice('2025-04-01', '2025-03-15', 50));  // 40.5
console.log(calculatePrice('2025-04-01', '2025-04-15', 75));  // 75
