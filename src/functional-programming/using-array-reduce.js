/**
 * Article: https://hackernoon.com/a-quick-introduction-to-functional-javascript-7e6fe520e7fa
 */

// Arrays with data
var oldExpenses = [
    { company: "BigCompany Co.", value: 1200.00 },
    { company: "Pineapple Inc.", value: 3107.02},
    { company: "Office Supplies Inc.", value: 266.97}
];

var newExpenses = [
    { company: "Office Supplies Inc.", value: 108.11},
    { company: "Megasoft Co.", value: 1208.99}
];

// Simple summation function
var sumValues = function(sum, x)
{
    return sum + x.value;
};

// Reducing the old expenses array
var oldExpensesSum = oldExpenses.reduce(sumValues, 0.0);
// Reducing the second array starting from old expenses sum reduction
console.log(newExpenses.reduce(sumValues, oldExpensesSum));
