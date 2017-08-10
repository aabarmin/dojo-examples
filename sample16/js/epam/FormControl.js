define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./FormControl.html",
    "dojox/mvc/getStateful",
    "dojox/mvc/getPlainValue"
], function (
    declare,
    lang,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template,
    getStateful,
    getPlainValue
) {
    return declare("epam.FormControl", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        templateString: template,

        /** Form model */
        model: getStateful({
            text: "New text",
            date: new Date(),
            check: true
        }),

        _getFieldValues: function(){
            console.log(
                getPlainValue(this.model)
            );
        },

        _watchModel: function(){
            this.model.watch(lang.hitch(this, function(){
                this._getFieldValues();
            }));
            console.log("Model watch enabled");
        },

        _watchProperty: function(){
            this.model.watch('text', lang.hitch(this, function(field, old, newValue){
                console.log(newValue);
            }));
            console.log("Property watch enabled");
        }
    });
});