import http from "http";

export const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ data: "I am Data" }));
});

server.listen(3012, () => console.log("Server is running on port: 3000"));
