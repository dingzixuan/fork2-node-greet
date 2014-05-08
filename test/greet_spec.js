//var expect = require("chai").expect;
var greet = require("greet");
var name = "spin";
var drunk = true;

describe('greet', function() {
  it("should greet a person by name", function() {
    expect(greet(name)).to.eql("hello, " + name);
  });
  it("shoud greet a person by flirtatiously if drunk", function() {
    expect(greet(name, drunk)).to.eql("hello " + name + ", you look sexy today");
  });
});
