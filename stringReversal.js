const chai = require("chai");
const expect = chai.expect;

//LINEAR TIME
const reverseString = (string) => string.split("").reverse().join("");

expect(reverseString("hello world!")).to.be.a("string");
expect(reverseString("hello world!")).to.equal("!dlrow olleh");
