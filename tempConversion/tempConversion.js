const ftoc = function(t) {
  return +((t-32.0) * 5.0/9.0).toFixed(1);
};

const ctof = function(t) {
  return +(t* 9.0/5.0 + 32.0).toFixed(1);
};

module.exports = {
  ftoc,
  ctof
};
