/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

// callbackURL: 'https://www.example.net/auth/facebook/callback'

module.exports.passport = {
	//local: {
	//  strategy: require('passport-local').Strategy
	//},

	//token: {
	//	strategy: require('passport-token').Strategy
	//},

	twitter: {
		name: 'Twitter',
		protocol: 'oauth',
		strategy: require('passport-twitter').Strategy,
		options: {
			consumerKey: 'sIDwDDR5dUbnDW4tXb14f5DRx',
			consumerSecret: 'r7nTX3dSgwFvqU1uyqH0EariOhIASirwsVBIHrf9bDzTHsIoZA'
		}
	}

	//,github: {
	//  name: 'GitHub',
	//  protocol: 'oauth2',
	//  strategy: require('passport-github').Strategy,
	//  options: {
	//    clientID: 'your-client-id',
	//    clientSecret: 'your-client-secret'
	//  }
	//},

	,facebook: {
		name: 'Facebook',
		protocol: 'oauth2',
		strategy: require('passport-facebook').Strategy,
		scope: ['email'],
		options: {
			clientID: '343924909127347',
			clientSecret: '3ee19cb916ecf367057ddeb94d0f4083'
		}
	}

	//,google: {
	//  name: 'Google',
	//  protocol: 'oauth2',
	//  strategy: require('passport-google-oauth').OAuth2Strategy,
	//  options: {
	//    clientID: 'your-client-id',
	//    clientSecret: 'your-client-secret'
	//  }
	//}
	};
