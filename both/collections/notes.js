Collections.Notes = new Mongo.Collection('notes');

Collections.Notes.deny({
  insert: function () {
  	return true;
	},
	update: function () {
  	return true;
	},
  remove: function () {
  	return true;
	}
});

Schemas = {};
Schemas.Note = new SimpleSchema({
	content: {
		type: String,
		label: 'Note',
    autoform: {
      afFieldInput: {
        type: 'textarea'
      }
    }
	},
	createdById: {
		type: String,
    optional: true
	},
  createdByEmail: {
		type: String,
    optional: true
	},
	createdOn: {
		type: Date,
    optional: true
	}
});

Collections.Notes.attachSchema(Schemas.Note);

Meteor.methods({

  noteInsert: function (doc) {

    var note, user = Meteor.user(), noteId;

    check(Meteor.userId(), String);
    check(doc, {
      content: String
    });

    note = _.extend(doc, {
      createdById: user._id,
      createdByEmail: user.emails[0].address,
      createdOn: new Date()
    });

    noteId = Collections.Notes.insert(note);

    return {
      _id: noteId
    };

  }

});
