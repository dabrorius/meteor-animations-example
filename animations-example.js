ANIMATION_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

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

  Template.body.rendered = function() {
    var $this = this;
    Meteor.defer(function(){
      document.getElementById("pizza-list")._uihooks = {
        insertElement: function(node, next) {
          $(node).addClass('animated zoomInUp').insertBefore(next);
        },
        removeElement: function(node) {
          $(node).removeClass().addClass('animated fadeOutRight')
            .on(ANIMATION_END, function() { $(node).remove() });
        }
      }
    });
  }

}

