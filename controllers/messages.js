const knex = require("../db/knex");

exports.getAllMessages = function(req, res) {
  knex("messages").then(messages => res.json(messages));
};

exports.getOneMessage = function(req, res) {
  knex("messages")
    .where("id", req.params.id)
    .then(messages => res.json(messages));
};

exports.addOneMessage = function(req, res) {
  knex("messages")
    .insert(req.body)
    .return("*")
    .then(newMessage => res.json(newMessage));
};

exports.updateOneMessage = function(req, res) {
  knex("messages")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedMessage => res.json(updatedMessage));
};

exports.removeOneMessage = function(req, res) {
  knex("messages")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newMessage => res.json(newMessage));
};
