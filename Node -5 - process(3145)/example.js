function runProgram(input){
    var a = Number(input);
}


// Begin reading from stdin so the process does not exit. 
//(basically reading from the command line)
process.stdin.resume();


//set the enconding for received data to ascii so it will be readable
process.stdin.setEncoding("ascii");
let read = "";


//if data is coming through, put it in the input string. 
//keep receiving data until no more comes through and we keep adding that data to "read"
process.stdin.on("data", function (input) {
   read += input;
});


//after the transmission when the end signal is received break the string up and 
//push each new line (\n == new line) as an element into the array.
// basically we take the code Line by Line
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});


//gives you one element per line to work with.
process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});