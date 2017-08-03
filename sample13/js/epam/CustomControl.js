define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!CustomControl.html",

    "dijit/Dialog",
    "dojo/store/JsonRest"
], function(
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template,

    Dialog,
    JsonRest
){
    return declare("epam.CustomControl", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        templateString: template,
        store: new JsonRest("/sample13/data.json"),

        fieldOne: null,
        fieldTwo: null,
        fieldThree: null,

        constructor: function(){

        },

        postMixInProperties: function(){
            this.inherited(arguments);
            console.log("postMixInPropertis", arguments);
        },

        buildRendering: function(){
            this.inherited(arguments);
            console.log("buildRendering", arguments);
        },

        postConstruct: function(){
            this.inherited(arguments);
            console.log("postConstruct", arguments);
        },

        startup: function(){
            this.inherited(arguments);
            console.log("startup", arguments);
        },

        _onLoadButtonClick: function(){
            this.store.get(1).then(lang.hitch(this, function(data){
                this.fieldOne.set('value', data.value1);
                this.fieldTwo.set('value', data.value2);
                this.fieldThree.set('value', data.value3);
            }));
        },

        _onGoButtonClick: function(){
            var data = {
                value1: this.fieldOne.get("value"),
                value2: this.fieldTwo.get("value"),
                value3: this.fieldThree.get("value")
            };

            var dialog = new Dialog({
                title: "Message from the page",
                content: "The button has been pressed, value is " + JSON.stringify(data)
            });
            dialog.show();
        }
    });
});