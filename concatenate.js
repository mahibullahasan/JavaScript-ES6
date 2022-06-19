//Using normal Concatenate for 2 variable::
const friendAges = [12, 13, 14, 16];
const friendAges2 = [13, 15, 11];

const totalAge = friendAges.concat(friendAges2);
console.log(totalAge);

//Using normal Concatenate for 3 variable::
const friendAges1 = [12, 13, 14, 16];
const friendAges3 = [13, 15, 11];
const cousinAges = [23, 25, 21,23];
const totalAge2 = friendAges.concat(friendAges3).concat(cousinAges);
console.log(totalAge2);

//using spread operator::
const friendAges4 = [12, 13, 14, 16];
const friendAges5 = [13, 15, 11];
const cousinAges2 = [23, 25, 21,23];
const totalAge3 = [...friendAges4, ...friendAges5, ...cousinAges2];
const totalAge4 = [...friendAges4, 5, ...friendAges5, ...cousinAges2]; //if want to use only value then put in this sequence.
console.log(totalAge3);
console.log(totalAge4);

const result = Math.max(...totalAge3); // three dot define array value.Without three dot result should be NaN because array value does not declare here.
console.log(result);