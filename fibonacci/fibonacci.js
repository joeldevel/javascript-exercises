const fibonacci = function(Number(n)) {
	if(n < 0) return "OOPS";
	if(n < 2) return n;
	return fibonacci(n-1) + fibonacci(n-2);
};

module.exports = fibonacci;
