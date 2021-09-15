const palindromes = function (str) {
	// regex help:
	//https://flaviocopes.com/how-to-replace-whitespace-javascript/
	//https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().replace(/\s/g, '');
	const l = str.length;
	for(let i=0; i<(l/2) ; i++)
		if(str[i] !== str[l-i-1])
			return false;

	return true;
};

module.exports = palindromes;
