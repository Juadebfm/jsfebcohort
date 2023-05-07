// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)
let string = "Love is the best to in this world";
console.log(string.startsWith("Love")); // true
console.log(string.startsWith("love")); // false
console.log(string.startsWith("world")); // false

let country = "Nigeria";
console.log(country.startsWith("Nig")); // true
console.log(country.startsWith("eri")); // false
console.log(country.startsWith("ria")); //  false
