///<reference path="../scripts/utilities.js" />
///<reference path="../scripts/measurement.js" />

var formatting = {
    majorCurrency: "£{0}",
    minorCurrency: "{0}p"
};
test("will get cost per unit", function () {
    var res = measurementLib.costPerUnit(1.00, 2, 3);

    equal(res, 0.50, "should give cost per unit to 3 decimal precision");
    equal(res.split('.')[1].length, 3, "should give cost per unit to 3 decimal precision: actual " + res.split('.')[1].length);
});
test("will get cost per unit without specifing precision", function () {
    var res = measurementLib.costPerUnit(1.00, 2);

    equal(res, 0.50, "should give cost per unit to 2 decimal precision");
    equal(res.split('.')[1].length, 2, "should give cost per unit to 2 decimal precision: actual " + res.split('.')[1].length);
});
test("will translate pounds to pence when amount less than 1 pound", function () {
    var cost = .567;
    var res = measurementLib.normalizeCost(cost, formatting);
    equal(res, "56.7p", "should give cost in pence: actual " + res);
});
test("will translate pounds when amount greater than 1 pound", function () {
    var cost = 1.567;
    var res = measurementLib.normalizeCost(cost, formatting);
    equal(res, "£1.57", "should give cost in pounds: actual " + res);
});
test("will translate pounds when amount equal to 1 pound", function () {
    var cost = 1.00;
    var res = measurementLib.normalizeCost(cost, formatting);
    equal(res, "£1.00", "should give cost in pounds: actual " + res);
});