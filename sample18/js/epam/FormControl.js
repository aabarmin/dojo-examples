define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./FormControl.html",
    "dojox/mvc/getStateful",
    "dojox/mvc/getPlainValue",
    "dojox/mvc/ModelRefController",
    "./FormModel"
], function (
    declare,
    lang,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template,
    getStateful,
    getPlainValue,
    ModelRefController,
    FormModel

) {
    return declare("epam.FormControl", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        templateString: template,

        /** Form model */
        model: null,
        ctrl: null,

        /** Data store */
        store: null,

        constructor: function(){
            this.model = getStateful({
                text: "Default value",
                date: new Date(),
                check: true
            });
            this.ctrl = new ModelRefController({
                model: this.model
            });
        },

        _createInvalidModel: function(){
            var invalidModel = new FormModel();
            //
            this.ctrl.set("model", getStateful(invalidModel));
        },

        _createValidModel: function(){
            var validModel = new FormModel({
                text: "Valid text",
                date: new Date(),
                check: true
            });
            //
            this.ctrl.set("model", getStateful(validModel));
        }
    });
});