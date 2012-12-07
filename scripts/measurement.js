var measurementLib = {
    costPerUnit: function (cost, units, decimalPlaces) {
        var precision = decimalPlaces || 2;
        if(!isNaN(cost) && !isNaN(units)){
            return (parseFloat(cost) / parseFloat(units)).toFixed(precision);
        }
    },
    normalizeCost: function (cost, formatting) {
        if (!isNaN(cost)) {
            var costf = parseFloat(cost);
            var costInt = parseInt(cost.toString().split('.')[0]);
            var lessThanOne = !costInt;
            if (lessThanOne) {
                return formatting.minorCurrency.format((costf * 100).toFixed(1));
            } 
            return formatting.majorCurrency.format(costf.toFixed(2));
        }
    }
};
