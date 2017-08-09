define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/aspect"
], function(
    declare,
    dom,
    on,
    lang,
    aspect
){
    return declare("epam.CommonModule", [], {
        prepare: function(){
            // before
            on(dom.byId("button1"), "click", lang.hitch(this, this.showBefore));

            // after
            on(dom.byId("button2"), "click", lang.hitch(this, this.showAfter));

            // around
            on(dom.byId("button3"), "click", lang.hitch(this, this.showAround));

            // run
            on(dom.byId("button4"), "click", lang.hitch(this, this.showFunction));
        },

        default: function(){
            console.log("I'm default function");
        },
        
        showBefore: function(){
            aspect.before(this, "default", function(){
                console.log("Before function invocation");
            });
            console.log("Aspect before added");
        },

        showAfter: function(){
            aspect.after(this, "default", function(){
                console.log("After function invocation");
            });
            console.log("Aspect after added");
        },

        showAround: function(){
            aspect.around(this, "default", function(originalFunction){
                return function(){
                    console.log("Before wrapped function");
                    originalFunction();
                    console.log("After wrapped function");
                }
            });
            console.log("Aspect around added");
        },

        showFunction: function(){
            this.default();
        }
    });
});