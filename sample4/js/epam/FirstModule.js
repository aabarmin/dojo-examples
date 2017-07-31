define([
    "dojo/_base/declare"
], function(
    declare
){
    return declare("epam.FirstModule", [], {
        someMethod: function(){
            console.log("Invocation from FirstModule");
        }
    });
});