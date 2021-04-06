// Write a recursive function called fib
// Accepts a number and returns the n-th number in the
// Fibonacci sequence.
// Fibonacci sequence is the sequence of whole numbers
// 1, 1, 2, 3, 5, 8 - starts with 1, 1 and every number there after
// is equal to the sume of the previous two numbers

function fib(num) {
	if (num <= 2) return 1;
	return fib(num - 2) + fib(num - 1);
}

console.log(fib(10));
console.log(fib(4));
console.log(fib(3));
