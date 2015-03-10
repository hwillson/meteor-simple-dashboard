Meteor.publish('notes', function () {
  return Collections.Notes.find({});
});
