(function(){
  "use script";

  var Moosipurk = function(){

    //see on singleton pattern
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }

    //this viitab moosipurgi funktsioonile
    Moosipurk.instance = this;

    console.log("Moosipurgi sees");
    

    //kui tahan moosipurgile referenci siis kasuton THIS = MOOSIPURGI RAKENDUS ISE
    this.init();
  };

  //kõik funktsioonid lähevad moosipurgi külge
  Moosipurk.prototype = {
    init: function(){
      console.log("Rakendus läks tööle");

    },
    bindMouseEvent: function(){

    }
  };

  var app = new Moosipurk();



})();
