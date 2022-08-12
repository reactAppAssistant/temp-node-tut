const { readFileSync, writeFileSync, read, writeFile } = require("fs");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");
console.log(first);

writeFileSync(
  "./content/subfolder/result.txt",
  `Here is the result of two files : ${first}, ${second}`
);

writeFileSync(
  "./content/subfolder/result.txt",
  "This is the appendend content",
  { flag: "a" }
);
