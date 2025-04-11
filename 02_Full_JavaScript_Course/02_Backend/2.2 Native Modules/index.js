const fs = require("fs");

// fs.writeFile("message.txt", "Hello and welcome to the node community!", (err) => {
//     if (err) throw err;
//     console.log('File successfully created!');
// });


fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});