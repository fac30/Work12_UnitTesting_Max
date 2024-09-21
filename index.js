// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(text) {
  const result = {};
  text.split("&").forEach(itemString => {
    const item = itemString.split("=");
    result[item[0]] = item[1];
  })
  return result;
}

console.log(searchParamsToObject("name=oliver&email=hello@oliverjam.es"));

function isLeapYear(year) {
  if (year % 1000 === 0) {
    return (year % 400 === 0);
  } else {
    return (year % 4 === 0);
  }
}

console.log(isLeapYear(2004));

module.exports =  { 
  makeUrl,
  searchParamsToObject,
  isLeapYear
};