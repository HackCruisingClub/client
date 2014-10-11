'use strict';

ABC.app.module('myModule', function(){
    // Private Data And Functions
    var privateData = 'this is private data';

    var privateFunction = function(){
        console.log(privateData);
    }

    this.someFunction = function(){
        privateFunction();
        console.log(this.someData);
    }
});