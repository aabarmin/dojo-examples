define([
    "dojo/_base/declare"
], function(
    declare
){
    return declare("epam.SecondModule", [], {
        someMethod: function(){
            console.log("Invocation from SecondModule");
        }
    });
});