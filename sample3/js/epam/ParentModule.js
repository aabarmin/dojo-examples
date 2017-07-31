define([
    "dojo/_base/declare"
], function(
    declare
){
    return declare("epam.ParentModule", [], {
        someMethod: function(){
            console.log("Invocation from ParentModule");
        }
    });
});