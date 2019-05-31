
/**
 * Calculate tips
 */
const calcTip = function() {
    'use strict';
    const subtotalElem = document.querySelector('#subtotal');
    const tipElem = document.querySelector('#tip');
    const totalElem = document.getElementById('total');
    let subtotal = parseFloat(subtotalElem.value); 
    let tip = parseFloat(tipElem.value);
    let total = subtotal + (subtotal * (tip / 100));
    totalElem.innerHTML = '$' + total.toFixed(2);
}