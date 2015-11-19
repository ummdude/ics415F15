Tasks = new Mongo.Collection("tasks");

// Router.route('/');
// Router.route('/register');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({

  });

  Template.body.events({

  });

  Template.task.events({

  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}