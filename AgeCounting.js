const https = require("https");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
  let data = "";

  resp.on("data", (d) => {
    data += [d];
  });

  resp.on("end", () => {
    let parsedData = data
      .split(",")
      .filter((data) => !data.indexOf(" age="))
      .map((data) => data.replace(" age=", ""))
      .map((data) => parseInt(data))
      .filter((data) => {
        return data === 30;
      });
    console.log("The Orginal Output", parsedData);
  });
  resp.on("error", (e) => {
    console.log("error", e);
  });
});
