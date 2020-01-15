function getTotalTTC(cartItems)
{
    let totalTTC = 0.0;
    cartItems.forEach(item => {
        totalTTC += (parseFloat(item.product.price) * parseInt(item.quantity));
    });
    return Math.round(parseFloat(totalTTC) * 100) / 100;
}

function getTotalTax(cartItems)
{
    let totalTax = 0.0;
    cartItems.forEach(item => {
        totalTax += ((parseFloat(item.product.price) * parseInt(item.quantity))/(parseFloat(item.product.tva.taux) + 1));
    });
    return Math.round(parseFloat(totalTax) * 100) / 100;
}

function getTotalHT(cartItems)
{
    return (getTotalTTC(cartItems) - getTotalTax(cartItems));
}

export { getTotalTTC, getTotalTax, getTotalHT };