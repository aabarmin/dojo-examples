define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dijit/registry",
    "dijit/_WidgetBase",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/form/Button",
    "dojo/aspect",
    "dojo/json"
], function(
    declare,
    lang,
    array,
    registry,
    _WidgetBase,
    BorderContainer,
    ContentPane,
    Button,
    aspect,
    json
){
    return declare("common.PresentationConsole", [ _WidgetBase ], {
        domNode: null,
        container: null,
        pane: null,
        splitter: true,

        constructor: function(){
            aspect.after(console, 'log', lang.hitch(this, function(a, b){
                var cnt = ["===============", json.stringify(b), "==============="];
                this.pane.set('content', cnt.join("<br />") + "<br />" + this.pane.get('content'));
            }));
        },

        buildRendering: function(){
            this.inherited(arguments);
            var currentContent = this.domNode.innerHTML;
            this.domNode.innerHTML = '';
            this.container = new BorderContainer({
                style: "width: 100%; height: 400px; "
            }, this.domNode);
            this.pane = new ContentPane({
                region: "center",
                class: "console",
                style: 'height: 100%; '
            });
            var toolbar = new ContentPane({
                region: 'bottom',
                style: "height: 30px; "
            });
            var cleaner = new Button({
                label: "clean",
                onClick: lang.hitch(this, function(){
                    this.pane.set('content', '');
                })
            });
            toolbar.addChild(cleaner);
            this.container.addChild(this.pane);
            this.container.addChild(toolbar);
            this.pane.set('content', currentContent + "<br />");
        },

        startup: function(){
            this.inherited(arguments);
            this.container.resize();
        }
    });
});