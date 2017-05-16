/*global podsLocalizedStrings */
'use strict';
var PodsI18n = (function () {

	/**
	 * Only visible to the closure, not exposed externally.
	 * @param {string} str
	 * @returns {string}
	 */
	var translateString = function ( str ) {
		var translated = str, ref;

		if ( typeof podsLocalizedStrings !== 'undefined' ) {

			/**
			 * Converts string into reference object variable
			 * Uses the same logic as PHP to create the same references
			 */
			ref = '__' + str;

			if ( typeof podsLocalizedStrings[ ref ] !== 'undefined' ) {
				translated = podsLocalizedStrings[ ref ];
			}
			else if ( podsLocalizedStrings.debug ) {
				console.log( 'PodsI18n: String not found "' + str + '" (reference used: "' + ref + '")' );
			}
		}

		return translated;
	};

	/**
	 * Supports %s and %d formats.
	 * @param {string} str
	 * @param {array} args
	 * @returns {string}
	 */
	var sprintf = function ( str, args ) {
		if ( ! args.length ) {
			return str;
		}
		var i, s, d,
			multi_s = ( -1 !== str.indexOf( '%1$s' ) ),
			multi_d = ( -1 !== str.indexOf( '%1$d' ) );

		for ( i=0, s=1, d=1; i < args.length; i++ ) {
			// Only support numbers other than strings
			if ( 'string' !== typeof args[ i ] ) {
				if ( multi_d ) {
					str = str.replace( "%" + d + "$d", args[ i ] );
					d++;
				} else {
					str = str.replace( "%d", args[ i ] );
				}
			} else {
				if ( multi_s ) {
					str = str.replace( "%" + s + "$s", args[ i ] );
					s++;
				} else {
					str = str.replace( "%s", args[ i ] );
				}
			}
		}

		return str;
	};

	/**
	 * The returned object, this is what we'll expose to the outside world
	 */
	return {
		/**
		 * @param {string} str
		 * @returns {string}
		 */
		__: function ( str ) {
			return translateString( str );
		},
		/**
		 * @param {string} str
		 * @param {array} args
		 * @returns {string}
		 */
		_s: function( str, args ) {
			return sprintf( PodsI18n.__( str ), args );
		}
	};

}());