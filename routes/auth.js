var express = require("express");
var msal = require("msal");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {});

var msalConfig = {
  auth: {
    clientId: "5afbb368-7dbe-43d1-ac1a-7a88f3823649",
    authority:
      "https://login.microsoftonline.com/79fe009c-79e0-4bc9-baec-a76d3145bde5"
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

var FHIRConfig = {
  FHIRendpoint: "https://cactus-verynewfhir.azurehealthcareapis.com"
};

var requestObj = {
  scopes: ["https://azurehealthcareapis.com/user_impersonation"]
};

module.exports = router;
