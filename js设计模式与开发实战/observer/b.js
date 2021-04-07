const waterWheel = require("./waterwheel.js");

const waterwheel = waterWheel.use("get_list");

waterwheel.on("data_change", (data) => {
  console.log("data", data);
});
