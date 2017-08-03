define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!CustomControl.html",

    "dijit/Dialog",
    "dojo/store/JsonRest",
    
    "dojo/Stateful",
    "dojox/mvc/ModelRefController",
    "dojox/mvc/getStateful"
], function(
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template,

    Dialog,
    JsonRest,
    Stateful,
    getStateful
){
    return declare("epam.CustomControl", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        templateString: template,
        store: new JsonRest("/sample13/data.json"),

        fieldOne: null,
        fieldTwo: null,
        fieldThree: null,

        dataModel: new ModelRefController({
            model: getStateful({
                field1: "initial value for field 1",
                field2: "initial value for field 2",
                field3: "initial value for field 3"
            })
        }),

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
                this.dataModel.set('model', getStateful(data));
            }));
        },

        _onGoButtonClick: function(){
            var data = this.dataModel.get('model');
            var dialog = new Dialog({
                title: "Message from the page",
                content: "The button has been pressed, value is " + JSON.stringify(data)
            });
            dialog.show();
        }
    });
});