const app = require("./app");
const config = require("./config/config");
require("./config/db");

app.listen(config.app.port, () => {
  console.log(`server is running at ${config.app.port}`);
});
