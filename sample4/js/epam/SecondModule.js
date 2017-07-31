define([
    "dojo/_base/declare"
], function(
    declare
){
    return declare("epam.SecondModule", [], {
        someMethod: function(){
            this.inherited(arguments);
            console.log("Invocation from SecondModule");
        }
    });
});