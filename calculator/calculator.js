const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	if(a.length===0)return 0;
	if(a.length===1) return a[0];
	let s = 0;
	a.forEach(e=>{s+=e});
	return s;
};

const multiply = function(a) {
	let o = 1;
	a.forEach(e=>{o*=e});
	return o;
};

const power = function(base,pow) {
	let result = 1;
	for(let i = 0; i< pow; i++) {
		result *= base;
	}
	return result;
};

const factorial = function(n) {
	if(n<=1) return 1;
	return factorial(n-1)*n;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
