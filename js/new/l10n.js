(function (window, parent, $) {
	'use strict';

	var Url = window.Url;

	/**
	 * Perform localization
	 *
	 * Listen to event 'language-change' to interact
	 * .on('language-change', function(event, lang) {})
	 *
	 * Use setLanguage(lang) to change language
	 *
	 * Element attributes:
	 *   - data-i18n: specify the key to be used for localization
	 *   - data-i18n-var: var will be used as name for string interpolation
	 *   - data-i18n-hide: a comma separated list of languages for which the 
	 *     element should be hidden
	 *   - data-i18n-link: update href with ?lang=currentLanguage
	 */

	var L10n = function() {
		// current UI language
		this.currentLanguage   = null;
		// last used language ( to properly detect changes )
		this.lastLanguage      = null;
		// user preferred language, dinamically calculated
		this.preferredLanguage = null;
		// default language
		this.defaultLanguage   = 'it';

		this.languages = {
			en: new Polyglot(),
			it: new Polyglot()
		};

		this._languageFiles = {
			en: 'languages/newindex-en.json',
			it: 'languages/newindex-it.json'
		};

		this.init();
	};

	L10n.prototype = {

		init: function () {
			var self = this;

			// detect preferred user language
			self._detectPreferredLanguage();
			// download specific language file
			self._downloadLanguageFile(self.preferredLanguage);
			// download all others language files
			for (var lang in self._languageFiles) {
				if (lang === self.preferredLanguage) { continue; }
				// var url = self._languageFiles[lang];
				self._downloadLanguageFile(lang);
			}
			// activate translation listener
			self._translateListener();
			// activate show/hide listeners
			self._translateHideListener();
			// activate url change listener
			self._translateUrlListener();

			$(window).on('ready', performInitialL10n.bind(self));
		},

		getTranslation: function (i18nKey) {
			var self = this;
			return self.languages[self.currentLanguage].t(i18nKey);
		},

		setLanguage: function (lang) {
			var self = this;
			// get language
			lang = lang || self.preferredLanguage;
			// trigger translate event
			$(window).trigger('language-change', lang);
		},

		consolidateLanguage: function(){
			this.lastLanguage = null;
			var lang = this.currentLanguage;
			$(window).trigger('language-change', lang);
		},

		/**
		 * Translate the specified element
		 *
		 * Element should have data-i18n attribute with the desired key
		 * 
		 * @param  {NodeElement} el DOM element to translate
		 */
		translate: function (el) {
			var self = this;
			// select element
			var $el = $(el);
			// get l10n key
			var i18nKey = $el.attr('data-i18n');
			// store attributes if present
			var attributes = {};
			// save reference to correct Polyglot instance
			var p = self.languages[self.currentLanguage];
			// for each attribute
			$.each($el.get(0).attributes, function (i, attrib) {
				// if starts with data-i18n-
				if (attrib.name.indexOf('data-i18n-') === 0) {
					// save is in attributes array
					attributes[attrib.name.split('-')[2]] = attrib.value;
				}
			});
			// if attributes is empty
			if ($.isEmptyObject(attributes)) {
				// translate directly
				$el.html(p.t(i18nKey));
			}
			// if is not empty
			else {
				// translate with interpolation
				$el.html(p.t(i18nKey, attributes));
			}
		},

		/**
		 * Attach listener to window to handle localization changes
		 *
		 * Event listening to:
		 *  - ready ( to properly localize on DOM ready )
		 * 	- language-change
		 */
		_translateListener: function () {
			var self = this;

			$(window).on('language-change', function(event, lang) {

				// console.log('l10n', lang)

				self.currentLanguage = lang;
				$(window).trigger('language-ready');

				if (self.currentLanguage !== self.lastLanguage) {
					$('[data-i18n]').each(function (idx, el) {
						// console.log(el);
						self.translate(el);
					});

					// change lang query param preserving url
					var u  = new Url();
					u.query.lang = self.currentLanguage;
					// change browser history to reflect new language
					// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
					history.replaceState({}, '', u.toString());
					self.lastLanguage = self.currentLanguage;
				}

			});
		},

		_translateHideListener: function () {
			var self = this;

			$(window).on('ready language-change', function(event, lang) {
				if (!lang) {
					if (!self.currentLanguage) {
						lang = self.preferredLanguage;
					}
					else {
						lang = self.currentLanguage;
					}
				}

				$('[data-i18n-hide]').each(function (idx, el) {
					var hide4Language = $(el).attr('data-i18n-hide').split(',');
					if (hide4Language.indexOf(self.currentLanguage) > -1) {
						$(el).addClass('l10n-hide');
					}
					else {
						$(el).removeClass('l10n-hide');
					}
				});

			});
		},

		_translateUrlListener: function () {
			$(window).on('language-change', function (event, lang) {
				var isMobile = window.location.pathname.indexOf('mobile') > -1;
				$('[data-i18n-link]').each(function (idx, el) {
					var href = new Url($(el).attr('href'));
					if (isMobile) {
						href.path = '/mobile' + href.path;
					}
					href.query.lang = lang;
					// console.log(href.toString())
					$(el).attr('href', href);
				});
			});
		},
				
		/**
		 * Detect user preferred language from URL var ?lang or browser default
		 */
		_detectPreferredLanguage: function () {
			var self = this;
			// get 'lang' URL param
			var urlLang = getUrlVars().lang;
			var preferredLanguage = null;

			// if present
			if (urlLang) {
				// try to use it as preferred language
				preferredLanguage = urlLang.substring(0, 2);
			}
			// if not present
			else {
				// try to use browser preferred language
				var language;
				if (window.navigator.languages) {
					language = window.navigator.languages[0];
				} 
				else if (window.navigator.userLanguage)
				 	language = window.navigator.userLanguage;
				else if (window.navigator.language) {
					language = window.navigator.language;
				}
				else {
					language = self.defaultLanguage;
				}

				preferredLanguage = 'it' //language.substring(0, 2);
			}

			// if preferrend language is one of the available languages
			if (self.languages.hasOwnProperty(preferredLanguage)) {
				// use it
				self.preferredLanguage = preferredLanguage;
			}
			else {
				self.preferredLanguage = self.defaultLanguage;
			}
		},

		/**
		 * Download a JSON language file via AJAX
		 * @param  {String} lang 2 letter language code
		 *
		 * If document ready hasn't been triggered it holds it until language file
		 * has been downloaded
		 */
		_downloadLanguageFile: function (lang) {
			var self = this;

			var url = self._languageFiles[lang];
			$.holdReady(true);
			$.getJSON(url, function (data) {
				// console.log(url, data);
				self.languages[lang].extend(data);
				$.holdReady(false);
			});
		}

	};

	parent.L10n = parent.L10n || new L10n();

	/**
	 * Read a page's GET URL variables and return them as an associative array
	 *
	 * @return {Object} An object whose enumerables are URL vars
	 */
	function getUrlVars() {
		var vars = [];
		if (window.location.href.indexOf('?') !== -1) {
			var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			var param;
			for(var i = 0; i < params.length; i++) {
				param = params[i].split('=');
				vars[param[0]] = decodeURI(param[1]);
			}
		}
		return vars;
	}

	function performInitialL10n (event) {
		var self = this;

		self.setLanguage(self.preferredLanguage);
		$(window).off('ready', performInitialL10n);
	}

}(window, window.Egizio, jQuery));
