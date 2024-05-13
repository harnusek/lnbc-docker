const express = require("express");
const app = express();
const port = 9000;

const axios = require("axios");

app.get("/", (req, res) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://umbrel.local:3003/api/v1/invoices?storeId=2oQ2SP5NyFzdPtybZuiLTXF2Jq59S3WhYL4x1iSgxzhi&currency=EUR&defaultPaymentMethod=BTC_LNURLPAY",
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      const localUrl = response.request.res.responseUrl;
      const url = localUrl.replace(
        "http://umbrel.local:3003",
        "https://btc.hrn.sk"
      );
      res.redirect(url);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
