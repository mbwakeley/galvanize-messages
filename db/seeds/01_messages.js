exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("messages").insert([
        { name: "Criminal", message: "What Are You?" },
        { name: "Batman", message: "I'm Batman" }
      ]);
    });
};
