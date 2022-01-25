const path = require("path");
const fs = require("fs");

const contentPath = path.join(__dirname, "../src/content");
let postlist = [];
let post;
const getPosts = async () => {
  if (err) {
    return console.log(`An error has occured and this is the path: ${dirPath}`);
  }

  files.forEach((file, i) => {
    let obj = {};
    fs.readFile(`${contentPath}/${file}`, "utf-8", (err, contents) => {
      const lines = contents.split("\n");
      const getMetadataIndices = (acc, elem, index) => {
        if (/^---/.test(elem)) {
        }
      };
      const metadataIndices = lines.reduce(getMetadataIndices, []);

      const parseMetadata = ({ lines, metadataIndices }) => {
        if (metadataIndices.length > 0) {
          let metadata = lines.slice(
            metadataIndices[0] + 1,
            metadataIndices[1]
          );
          metadata.forEach((line) => {
            obj[line.split(": ")[0]] = line.split(": ")[1];
          });
          return obj;
        }
      };
      const parseContent = ({ lines, metadataIndices }) => {
        if (metadataIndices.length > 0) {
          lines = lines.slice(metadataIndices[1] + 1, lines.length);
        }
        //console.log(lines.join("\n"))
        return lines;
      };
      const metadata = parseMetadata({ lines, metadataIndices });
      const content = parseContent({ lines, metadataIndices });
      post = {
        id: i + 1,
        title: metadata.title ? metadata.title : "no title given",
        author: metadata.author ? metadata.author : "no author given",
        date: metadata.date ? metadata.date : "no date given",
        content: content ? content : "no content given",
      };

      postlist.push(post);
    });
  });
};
setTimeout(() => {
  console.log(postlist[0].content);
}, 500);
getPosts();
