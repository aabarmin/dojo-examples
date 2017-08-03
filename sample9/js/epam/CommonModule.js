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
            on(dom.byId("button1"), "click", lang.hitch(this, this.showSubscribe));

            // resolve promise
            on(dom.byId("button2"), "click", lang.hitch(this, this.showPublish));

            // update status
            on(dom.byId("button3"), "click", lang.hitch(this, this.showPublish));

            // reject promise
            on(dom.byId("button4"), "click", lang.hitch(this, this.showAttachEvent));

            // all
            on(dom.byId("button5"), "click", lang.hitch(this, this.showInvokeAction));
        },

        showNewPromise: function(){
            this.promise = new Promise();
            this.promise.then(function(data){
                console.log("Promise resolved", data);
            }, function(reason){
                console.log("Promise rejected", reason);
            }, function(status){
                console.log("Promise udpated", status);
            });
        },

        showResolvePromise: function(){
            this.promise.resolve({
                property: "Value on resolve"
            });
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
            promises.push(new Deferred());
            promises.push(new Deferred());
            promises.push(new Deferred());
            promises.push(new Deferred());
            //
            all(promises, function(){
                console.log("All promises resolved");
            });
            //
            array.forEach(promises, function(promise){
                promise.resolve();
            });
        }
    });
});