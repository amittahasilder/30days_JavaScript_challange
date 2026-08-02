function greet(name){
   console.log(name);
}

function execute(callback){
   callback("Rahim");
}

execute(greet);