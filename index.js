var http = require("http"),
  app = require("./config/express");

// http.createServer(app).listen(3030, function() {
//   console.log(`Servidor escutando na porta: ${this.address().port}`);
// });
server.listen({ port: process.env.PORT || 4000 })