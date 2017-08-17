define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojox/lang/typed"
], function (
    declare,
    lang,
    typed
) {
    var modelClass = declare("epam.FormModel", [], {
        text: null,
        date: null,
        checked: null,

        constructor: function(data){
            lang.mixin(this, data);
        }
    });

    var formModel = typed(modelClass);

    formModel.properties = {
        text: String,
        date: Date
    };

    return formModel;
});