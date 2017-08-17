define([
    "dojo/_base/declare"
], function(
    declare
){
    return declare("epam.FirstModule", [], {

        someMethod: function(){
            this.inherited(arguments);
            console.log("Invocation from FirstModule");
        }

    });
});