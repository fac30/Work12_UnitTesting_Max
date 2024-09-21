const { equal, notEqual, test } = require("./test-helpers.js");
const { makeUrl, searchParamsToObject, isLeapYear } = require("./index.js");

function testUrl(pokemon, expected) {
    const result = makeUrl(pokemon);
    equal(result, expected);
}

test("Testing that the pokemon api url builds as expected: ", () => testUrl("bulbasaur", "https://pokeapi.co/api/v2/bulbasaur"));

function testObject(text, expected) {
    const result = searchParamsToObject(text);
    for (key of Object.keys(expected)) {
        equal(result[key], expected[key]);
    }
}

test("Testing that the string to object function builds objects as expected: ", () => testObject("name=oliver&email=hello@oliverjam.es", {name: 'oliver', email: 'hello@oliverjam.es'}));

function testLeapYear(year, expected) {
    const result = isLeapYear(year);
    equal(result, expected);
}

const testYear = 'hello';

test(`Testing that the leap year function correctly identifies whether ${testYear} is a leap years: `, () => testLeapYear(testYear, false));