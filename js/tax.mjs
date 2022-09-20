function calculateTax(amount, taxPercentage) {
    return amount + amount * (taxPercentage / 100);
}

export {calculateTax}