define([
    "dojo/_base/declare",
    "epam/ParentModule"
], function(
    declare,
    ParentModule
){
    return declare("epam.ChildModule", [ ParentModule ], {
        someMethod: function(){
            this.inherited(arguments);

            console.log("Invocation from ChildModule");
        }
    });
});