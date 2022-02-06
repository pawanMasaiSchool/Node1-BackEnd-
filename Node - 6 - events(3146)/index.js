

console.log(process.platform);

let c = 0;
setInterval(()=>{
    console.log("Counter",c++)
},1000)

process.on('SIGINT', ()=>{
    console.log("Counter terminated, exiting the application byebye");
    process.exit();
})