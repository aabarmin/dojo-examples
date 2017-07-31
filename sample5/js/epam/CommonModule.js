define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/on",
    "dojo/_base/lang"
], function(
    declare,
    dom,
    on,
    lang
){
    return declare("epam.CommonModule", [], {
        prepare: function(){
            // default scope
            on(dom.byId("button1"), "click", this.scopedFunction);

            // scope is this
            on(dom.byId("button2"), "click", lang.hitch(this, this.scopedFunction));

            // clone objects
            on(dom.byId("button3"), "click", lang.hitch(this, this.showClone));

            // mixing objects
            on(dom.byId("button4"), "click", lang.hitch(this, this.showMixin));

            // extending classes
            on(dom.byId("button5"), "click", lang.hitch(this, this.showExtending));

            // delegation
            on(dom.byId("button6"), "click", lang.hitch(this, this.showDelegation));
        },

        scopedFunction: function(){
            console.log(this);
            debugger;
        },

        showClone: function(){
            debugger;

            var currentObject = {
                property1: "value1",
                property2: "value2"
            };
            console.log(currentObject);

            var clonedObject = lang.clone(currentObject);
            console.log(clonedObject);

            console.log("Objects are equal", currentObject == clonedObject);
        },

        showMixin: function(){
            debugger;

            var object1 = {
                property1: "value1"
            };
            var object2 = {
                property2: "value2"
            };

            var mixed = lang.mixin(object1, object2);
            console.log(mixed);
        },

        showExtending: function(){
            debugger;

            var SomeClass = declare([], {
                property1: "value1"
            });

            var instance1 = new SomeClass();
            console.log(instance1);

            lang.extend(SomeClass, {
                property2: "value2"
            });
            var instance2 = new SomeClass();
            console.log(instance2);
        },
        
        showDelegation: function(){
            debugger;

            var SomeClass = declare([], {
                property1: "value1"
            });
            var instance = new SomeClass();
            console.log(instance);

            var delegatedInstance = lang.delegate(instance, {
                property2: "value1"
            });
            console.log(delegatedInstance);
        }
    });
});