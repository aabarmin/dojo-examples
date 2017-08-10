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
    "dojo/store/JsonRest"
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
    JsonRest
) {
    return declare("epam.FormControl", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        templateString: template,

        /** Form model */
        model: null,
        ctrl: null,

        /** Data store */
        store: null,

        constructor: function(){
            this.store = new JsonRest({
                target: "./"
            });
            this.model = getStateful({
                text: "Default value",
                date: new Date(),
                check: true
            });
            this.ctrl = new ModelRefController({
                model: this.model
            });
        },

        _loadData: function(){
            setTimeout(lang.hitch(this, this._doLoadData), 200);
        },

        _doLoadData: function(){
            this.store.get(1).then(lang.hitch(this, function(data){
                this.ctrl.set("model", getStateful(data));
            }));
        },

        _saveData: function(){
            var data = getPlainValue(this.ctrl.get("model"));
            this.store.add(data).then(lang.hitch(this, function(){
                debugger;
            }));
        }
    });
});