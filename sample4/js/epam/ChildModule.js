define([
    "dojo/_base/declare",
    "epam/FirstModule",
    "epam/SecondModule"
], function(
    declare,
    FirstModule,
    SecondModule
){
    return declare("epam.ChildModule", [ FirstModule, SecondModule ], {
        someMethod: function(){
            this.inherited(arguments);

            console.log("Invocation from ChildModule");
        }
    });
});