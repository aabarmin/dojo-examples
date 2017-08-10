define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./ApplicationLayout.html",
    "dijit/layout/ContentPane",
    "dijit/_Container"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template,
    ContentPane,
    _Container
) {
    return declare("epam.ApplicationLayout", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        /** Widget template */
        templateString: template,

        /** Containers attach point */
        tabContainer: null,
        accordionContainer: null,
        tableContainer: null,

        /** Widget content */
        containerNode: null,

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

        /** Lifecycle hook */
        buildRendering: function(){
            this.inherited(arguments);
            console.log("Good place to set a break point");
        }
    });
});