// Write a function called power that acceps a base and an exponent.
// The function should return the power of the base to the exponent.
// Do not worry about negative bases and exponents

function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	return base * power(base, exponent - 1);
}

console.log(power(2, 5));
