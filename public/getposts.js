const path = require("path");
const fs = require("fs");

const contentPath = path.join(__dirname, "../src/content");
let postlist = [];

const getPosts = async () => {
  console.log(`Esta es la ruta: ${contentPath}`);

  await fs.readdir(contentPath, (err, files) => {
    if (err) {
      return console.log(
        `An error has occured and this is the path: ${dirPath}`
      );
    }

    files.forEach((file, i) => {
      let obj = {};
      let post;

      fs.readFile(`${contentPath}/${file}`, "utf-8", (err, contents) => {
        const getMetadataIndices = (acc, elem, index) => {
          if (/^---/.test(elem)) {
            acc.push(index);
          }
          return acc;
        };

        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        console.log(metadataIndices);
      });
    });
  });
};

getPosts();
