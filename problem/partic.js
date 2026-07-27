const timer = settimeout(()=>{
    console.log("Hello");
},500);

setTimeout(()=>{
    clearTimeout(time);
    console.log("canceled")
},2000)