module.exports = {
  "Demo Openfigi search": function(client) {
    client
      .url(`http://www.openfigi.com/search`)
      .waitForElementVisible(`button[type="submit"]`, 2000)
      .assert.title(`Search | OpenFIGI`)
      .assert.visible(`input[ng-model="_.simpleSearchString"]`)
      .setValue(`input[ng-model="_.simpleSearchString"]`, `ibm`)
      // .waitForElementVisible(`input[ng-model="_.simpleSearchString"]`, 1000)
      .click(`button[type="submit"]`)
      .pause(2000)
      .assert.containsText(`body`, `Rows per page`)
      .saveScreenshot("./reports/search-result.png")
      .end();
  },
};
