///<reference path="../scripts/measurement.js" />
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