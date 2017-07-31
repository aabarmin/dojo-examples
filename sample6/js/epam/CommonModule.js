define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/_base/array"
], function(
    declare,
    dom,
    on,
    lang,
    array
){
    return declare("epam.CommonModule", [], {
        arr: [
            "value1",
            "value2",
            "value3",
            "value4",
            "value5"
        ],

        prepare: function(){
            // for each
            on(dom.byId("button1"), "click", lang.hitch(this, this.showForEach));

            // filter
            on(dom.byId("button2"), "click", lang.hitch(this, this.showFilter));

            // map
            on(dom.byId("button3"), "click", lang.hitch(this, this.showMap));

            // some
            on(dom.byId("button4"), "click", lang.hitch(this, this.showSome));

            // every
            on(dom.byId("button5"), "click", lang.hitch(this, this.showEvery));
        },

        showForEach: function(){
            debugger;

            array.forEach(this.arr, function(value, key){
                console.log(key, value);
            }, this);
        },

        showFilter: function(){
            debugger;

            var newArr = array.filter(this.arr, function(value, key){
                return key % 2 == 0;
            }, this);
            console.log(newArr);
        },

        showMap: function(){
            debugger;

            var mapped = array.map(this.arr, function(value, key){
                return key + value + key;
            }, this);
            console.log(mapped);
        },

        showSome: function(){
            debugger;

            var result = array.some(this.arr, function(value, key){
                return key % 2 == 0;
            }, this);
            console.log(result);
        },

        showEvery: function(){
            debugger;

            var result = array.every(this.arr, function(value, key){
                return key % 2 == 0;
            }, this);
            console.log(result);
        }
    });
});