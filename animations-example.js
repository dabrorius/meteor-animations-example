Pizzas = new Mongo.Collection("pizzas");

if (Meteor.isClient) {

  Template.body.helpers({
    pizzas: function () {
      return Pizzas.find({});
    }
  });

  Template.body.events({
    'click #add-pizza': function () {
      Pizzas.insert({ name: "Pizza" });
    },
    'click .remove-pizza': function () {
      Pizzas.remove({ _id: this._id });
    }
  });
}

