var models = require('../model');
var assert = require("assert");

describe("User", function() {
    describe("updateRoundScore()", function() {
        it("update round score should updated scores", function () {
            var user = new models.User({}, 5);
            user.updateRoundScore(1, 10);
            assert.equal(user.get('round_scores')[1], 10);
            assert.equal(user.get('total_score'), 10);          

            user.updateRoundScore(1, -10);
            assert.equal(user.get('round_scores')[1], -10);
            assert.equal(user.get('total_score'), -10);
        });
    })
    describe("initialize()", function () {
        it("the initial values are set properly", function () {
            var initializeData = { uid: 12345, nick: "Sassyboy" };
            var user = new models.User(initializeData, 5);
            assert.equal(user.get('uid'), 12345);
            assert.equal(user.get('nick'), "Sassyboy");
        });
    });
})

describe("Game", function () {
    describe("initialize()", function () {
        it("game should have 0 users", function () {
            var initializeData = {max_rounds:10};
            var game = new models.Game(initializeData);

            assert.equal(game.get('current_round'), -1);
            assert.equal(game.get('max_rounds'), 10);
            assert.equal((game.get('active_users')).length, 0);
            assert.equal((game.get('queued_users')).length, 0);
        });
    })

    describe("addNewUser()", function () {
        it("should add first user to queued_users", function () {
            var game = new models.Game();            
            var userToAdd = new models.User({ uid: 12345, nick: "Sassybo" }, game.max_rounds);           

            game.addNewUser(userToAdd);
            assert.equal((game.get('queued_users')).length, 1);
            assert.equal((game.get('active_users')).length, 0);
            assert.equal(game.get('queued_users')[0].uid, 12345);
            assert.equal(game.get('queued_users')[0].nick, "Sassybo");            
        });
    });
    
    
});
