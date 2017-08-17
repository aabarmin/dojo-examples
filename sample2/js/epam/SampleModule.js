define([
    "dojo/_base/declare",
    "dojo/domReady",
    "dojo/dom"
], function(
    declare,
    ready,
    dom
){
    return declare("epam.SampleModule", [], {

        constructor: function(){
            ready(function(){
                var element = dom.byId("greetings");
                element.innerHTML = "Hello, Dojo!";
            });
        }

    });
});