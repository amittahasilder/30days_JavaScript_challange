function order(callback){

   console.log("Pizza Ordered");

   callback();
}

order(function(){

   console.log("Pizza Delivered");

});