/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import image from "qr-image";

inquirer
    .prompt([
        {
            message: "Type in your URL",
            name: "url"
        }
    ])
    .then(answers => {
        console.log(answers)
    })