define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/topic",
    "dojo/Evented"
], function(
    declare,
    dom,
    on,
    lang,
    topic,
    Evented
){
    var InnerClass = declare([ Evented ], {
        someMethod: function(){
            console.log("Before emitting");
            this.emit("invocation", {
                message: "I'm emitted data"
            });
            console.log("After emitting");
        }
    });

    return declare("epam.CommonModule", [], {
        innerInstance: new InnerClass(),

        prepare: function(){
            // subscribe
            on(dom.byId("button1"), "click", lang.hitch(this, this.showSubscribe));

            // publish
            on(dom.byId("button2"), "click", lang.hitch(this, this.showPublish));

            // attach event
            on(dom.byId("button3"), "click", lang.hitch(this, this.showAttachEvent));

            // invoke handler
            on(dom.byId("button4"), "click", lang.hitch(this, this.showInvokeAction));
        },

        showSubscribe: function(){
            topic.subscribe("/my/topic", function(data){
                console.log("Got an event", data);
            });
            console.log("Subscription added");
        },

        showPublish: function(){
            topic.publish("/my/topic", {
                hello: "World!"
            });
            console.log("Event published");
        },

        showAttachEvent: function(){
            this.innerInstance.on("invocation", function(){
                console.log("On method invocation");
            });
            console.log("Listener attached");
        },

        showInvokeAction: function(){
            this.innerInstance.someMethod();
        }
    });
});