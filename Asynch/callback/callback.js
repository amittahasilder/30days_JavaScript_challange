function greet ( name, callback){
    console.log("hello"+ name);
    callback();
}

function bye(){
    console.log("bye");

}

greet("Rahim", bye);