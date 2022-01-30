const path = require("path");
const fs = require("fs");

const contentPath = path.join(__dirname, "./content");
let postlist = [];

const getPosts = async () => {
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
        const lines = contents.split("\n");
        const getMetadataIndices = (acc, elem, index) => {
          if (/^---/.test(elem)) {
            acc.push(index);
          }
          return acc;
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          //console.log(lines.join("\n"))
          return lines;
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
            //console.log(obj);
            return obj;
          }
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
  });
};

setTimeout(() => {
  let x = postlist.map((item) => console.log(item.title));
}, 500);

getPosts();
