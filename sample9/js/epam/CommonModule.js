define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/Deferred",
    "dojo/promise/all"
], function(
    declare,
    dom,
    on,
    lang,
    array,
    Deferred,
    all
){
    return declare("epam.CommonModule", [], {
        promise: new Deferred(),

        prepare: function(){
            // create new promise
            on(dom.byId("button1"), "click", lang.hitch(this, this.showNewPromise));

            // resolve promise
            on(dom.byId("button2"), "click", lang.hitch(this, this.showResolvePromise));

            // update status
            on(dom.byId("button3"), "click", lang.hitch(this, this.showUpdatePromise));

            // reject promise
            on(dom.byId("button4"), "click", lang.hitch(this, this.showPromiseCancel));

            // all
            on(dom.byId("button5"), "click", lang.hitch(this, this.showPromisesAll));
        },

        showNewPromise: function(){
            this.promise = new Deferred();
            this.promise.then(function(data){
                console.log("Promise resolved", data);
            }, function(reason){
                console.log("Promise rejected", reason);
            }, function(status){
                console.log("Promise updated", status);
            });
            console.log("Promise created");
        },

        showResolvePromise: function(){
            this.promise.resolve({
                property: "Value on resolve"
            });
            console.log("Promise resolved");
        },

        showUpdatePromise: function(){
            this.promise.progress({
                property: "Current status"
            });
        },

        showPromiseCancel: function(){
            this.promise.reject({
                property: "Rejection reason"
            });
        },

        showPromisesAll: function(){
            var promises = [];
            for (var i = 0; i < 5; i++) {
                var p = new Deferred();
                p.then(lang.hitch(this, function(index){
                    console.log("Promise " + index + " resolved");
                }, i));
                promises.push(p);
            }
            //
            console.log("Promises created");
            //
            all(promises).then(function(){
                console.log("All promises resolved");
            });
            //
            array.forEach(promises, function(promise){
                promise.resolve();
            });
            //
            console.log("Promises resolved");
        }
    });
});