const path = require("path")
const fs = require("fs")
const getPages = require('./index.js')

const contentPath = path.join(__dirname, "../src/content");
let postlist = [];

const getPosts = () => {
     fs.readdir(contentPath, (err, files) => {
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
          return lines.join(" ");
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
        const date = new Date(metadata.date);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "no title given",
          author: metadata.author ? metadata.author : "no author given",
          date: metadata.date ? metadata.date : "no date given",
          description: metadata.description ? metadata.description : "no given description",
          content: content ? content : "no  given",
        };
         postlist.push(post);
         if(i=== files.length - 1){
          let data = JSON.stringify(postlist);
          fs.writeFileSync('src/posts.json', data);
        }
      });
    });
  });

};


getPosts();
getPages();

const delay = (ms)=> new Promise((resolve)=> setTimeout(resolve, ms))

const display = async ()=> {
   await delay(500)
   console.log(postlist)
}

display()


//Warning: To load an ES module, 
//set "type": "module" in the package.json or use the .mjs extension.