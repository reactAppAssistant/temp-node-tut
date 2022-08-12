const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write("Server running");
  //   res.end();
  if (req.url === "/") {
    res.end("This is the home page");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`<h1>Error</h1>
<p>We can't seem to find this page</p>`);
});

server.listen(5000);
