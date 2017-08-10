define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./FormControl.html"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template
) {
    return declare("epam.FormControl", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        templateString: template,

        /** Form controls */
        textField: null,
        dateField: null,
        checkBoxField: null,

        _setFieldValues: function(){
            this.textField.set("value", Math.random());
            this.dateField.set("value", new Date());
            this.checkBoxField.set("value", !this.checkBoxField.get("value"));
        },

        _getFieldValues: function(){
            var model = {
                text: this.textField.get("value"),
                date: this.dateField.get("value"),
                check: this.checkBoxField.get("value")
            };
            console.log(model);
        }
    });
});