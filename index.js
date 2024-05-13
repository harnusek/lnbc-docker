const express = require("express");
const app = express();
const port = 9000;

const axios = require("axios");

app.get("/", (req, res) => {
  console.log(req.hostname);

  const host = "http://btcpay-server_web_1";
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${host}/api/v1/invoices?storeId=2oQ2SP5NyFzdPtybZuiLTXF2Jq59S3WhYL4x1iSgxzhi&currency=EUR&defaultPaymentMethod=BTC_LNURLPAY`,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      const localUrl = response.request.res.responseUrl;
      console.log(localUrl);
      const url = localUrl.replace(host, "https://btc.hrn.sk");
      res.redirect(url);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
