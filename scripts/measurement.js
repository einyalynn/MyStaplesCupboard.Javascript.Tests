var measurementLib = {
    costPerUnit: function (cost, units, decimalPlaces) {
        var precision = decimalPlaces || 2;
        if(!isNaN(cost) && !isNaN(units)){
            return (parseFloat(cost) / parseFloat(units)).toPrecision(precision);
        }
    }
};