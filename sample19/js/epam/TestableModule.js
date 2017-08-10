define([
    "dojo/_base/declare"
], function (
    declare
) {
    return declare("epam.TestableModule", [], {
        getSum: function(a, b){
            return a + b;
        }
    });
});