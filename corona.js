const request = require("request")
const cheerio = require("cheerio")
const chalk = require("chalk")

//copy and paste the request module from : https://www.npmjs.com/package/request
request('https://www.worldometers.info/coronavirus/', cb)
 function cb(error, response, html) {

    if(error){
        console.error('error:', error); // Print the error if one occurred
    }
    else{
        helpHTML(html)
    }
}

function helpHTML(html) {
    // here starts the cheerio module : it is used for scraping or reading the data of a webpage 
    let selTool = cheerio.load(html)//gives kind of data types present in the webpage, like html, xml etc
    let dataArr = selTool(".maincounter-number>span")   //gives info about the h1 tags in an arry 

    console.log(chalk.gray("Total Cases : "), chalk.gray(selTool(dataArr[0]).text()))
    console.log(chalk.red("Total Deaths : "), chalk.red(selTool(dataArr[1]).text()))
    console.log(chalk.greenBright("Total Recovered : "), chalk.greenBright(selTool(dataArr[2]).text()))
}