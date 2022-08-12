const path = require("path");

// returns the platform-specific file separator

console.log(path.sep);

// path.join()
// The path. join() method joins the specified path segments
// into one path. You can specify as many path segments
// as you like. The specified path segments must be strings,
// separated by comma.

const newPath = path.join("hello", "hey", "hi.txt");

console.log(newPath);

// to see the file at the end of a path then use path.basename()

console.log(path.basename(newPath));

// path.resolve() to create an absolute path

const absolute = path.resolve(__dirname, "content", "subfolder", "myapp.txt");

console.log(absolute);
