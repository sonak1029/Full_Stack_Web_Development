import inquirer from 'inquirer';
import qr_img from "qr-image";
import fs from "fs";

// console.log(qr_img);

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([
    {
        message: 'Enter the URL to generate QR code: ',
        name: 'url',
    }
  ])
  .then((answers) => {
    const url = answers.url;
 
    const qr_svg = qr_img.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });