var _ = require('underscore')._;
var Backbone = require('backbone');

var User = Backbone.Model.extend({
  defaults: {
    uid: 0,
    current_game_score: 0,
    round_scores: [],
    nick: "",
    total_score: 0
  },

  initialize: function(data) {
    this.set(data);
  },

  updateRoundScore: function(round_no, score) {
    var round_scores = this.get('round_scores');
    var current_game_score = this.get('current_game_score');
    var total_score = this.get('total_score');
    round_scores[round_no] = score;
    this.set({current_game_score: current_game_score+score});
    this.set({total_score: total_score+score});
  }
});

var Users = Backbone.Collection.extend({
  model: User
});

var Game = Backbone.Model.extend({
  defaults: {
    current_round: 1,
    max_rounds: 5
  }
});

var Round = Backbone.Model.extend({
  defaults: {
    question: "",
    answer: "",
    time: "",
    buzzed_uid: 0
  }
});

var Rounds = Backbone.Collection.extend({
  model: Round
});

exports.User = User;
