const fs = require('fs');

fs.writeFile('message.txt', "Hello From Node js", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.readFile('message.txt',function(err,data){
    
})