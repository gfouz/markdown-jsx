const path = require("path");
const fs = require("fs");

const dirPathPages = path.join(__dirname, "../src/pages/content");
let pagelist = [];

module.exports = function getPages () {
  fs.readdir(dirPathPages, (err, files) => {
    if (err) {
      return console.log(
        `An error has occured and this is the path: ${dirPathPages}`
      );
    }
    files.forEach((file, i) => {
      let page;

      fs.readFile(`${dirPathPages}/${file}`, "utf-8", (err, contents) => {
        page = {
          content: contents
        }
        pagelist.push(page);
        let data = JSON.stringify(pagelist);
        fs.writeFileSync('src/pages.json', data);
        
      });
    });
  });

};


/*getPages();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const display = async () => {
  await delay(500)
  console.log(pagelist)
}
display()*/