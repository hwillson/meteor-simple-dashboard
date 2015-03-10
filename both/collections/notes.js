Collections.Notes = new Mongo.Collection('notes');

Collections.Notes.allow({
  insert: function () {
  	return true;
	}
});

Collections.Notes.deny({
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
	createdBy: {
		type: String,
		autoform: {
      afFieldInput: {
        type: 'hidden'
      },
      afFormGroup: {
        label: false
      }
    }
	},
	createdOn: {
		type: Date,
    autoform: {
      afFieldInput: {
        type: 'hidden'
      },
      afFormGroup: {
        label: false
      }
    }
	}
});

Collections.Notes.attachSchema(Schemas.Note);
