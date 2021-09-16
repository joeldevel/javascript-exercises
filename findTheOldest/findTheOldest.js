const findTheOldest = function(people) {
	const reducer = (birth, death=2021) => death - birth;
	const ages = people.map((p)=> reducer(p.yearOfBirth, p.yearOfDeath));
	ages.sort();
	return people.find(p => {
	  const d = p.yearOfDeath ? p.yearOfDeath : 2021;
		return (d - p.yearOfBirth === ages[ages.length-1]);
	});
};

module.exports = findTheOldest;
