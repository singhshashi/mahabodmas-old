var models = require('../model');
var assert = require("assert");

describe("User", function() {
  describe("updateRoundScore()", function() {
    it("update round score should updated scores", function() {
      var user = new models.User({
        round_scores: [0,0,0,0,0]
      });
      user.updateRoundScore(1, 10);
      assert.equal(user.get('round_scores')[1], 10);

      user.updateRoundScore(1, -10);
      assert.equal(user.get('round_scores')[1], -10);
    });
  })
})
