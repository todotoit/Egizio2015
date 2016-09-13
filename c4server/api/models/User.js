var User = {
	// Enforce model schema in the case of schemaless databases
	schema: true,

	attributes: {
		username    : { type: 'string', unique: true },
		email       : { type: 'email',  unique: true },
		displayName : { type: 'string'},
		photo       : { type: 'string'},
		provider    : { type: 'string'},
		token		: { type: 'string'},
		passports   : { collection: 'Passport', via: 'user' },
		sessions	: { collection: 'Session', via: 'user'}
	},

	verifyToken: function(token) {
		return this.token === token;
	},

	toJSON: function() {
		var obj = this.toObject();
		delete obj.password;
		delete obj.token;
		delete obj.passports;
		delete obj.email;
		delete obj.createdAt;
		delete obj.updatedAt;
		return obj;
	}

};

module.exports = User;
