define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./ApplicationLayout.html",
    "dijit/layout/ContentPane"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template,
    ContentPane
) {
    return declare("epam.ApplicationLayout", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        /** Widget template */
        templateString: template,

        /** Containers attach point */
        tabContainer: null,
        accordionContainer: null,
        tableContainer: null,

        /** Event handler */
        _createNewTab: function(){
            var tab = new ContentPane({
                title: "New tab",
                content: "New tab content",
                closable: true
            });
            this.tabContainer.addChild(tab);
        },

        _createNewAccordionPane: function(){
            var tab = new ContentPane({
                title: "New pane",
                content: "New accordion pane content"
            });
            this.accordionContainer.addChild(tab);
        },

        _setTwoFormColumns: function(){
            this.tableContainer.set("cols", 2);
        },

        _setFormHorizontal: function(){
            this.tableContainer.set("orientation", "horiz");
        },

        _formReset: function(){
            this.tableContainer.set("cols", 1);
            this.tableContainer.set("orientation", "vert");
        },

        /** Lifecycle hook */
        buildRendering: function(){
            this.inherited(arguments);
            console.log("Good place to set a break point");
        }
    });
});