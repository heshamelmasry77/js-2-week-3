function formatCurrency(amount, currencySymbol = "USD") {
    const formattedAmount = amount.toFixed(2);
    return `${formattedAmount} ${currencySymbol}`
}

export {formatCurrency}
