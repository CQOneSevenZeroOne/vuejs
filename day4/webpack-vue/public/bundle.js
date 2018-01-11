/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2)
var Vue = __webpack_require__(3)
var tool = __webpack_require__(7)
__webpack_require__(8)
console.log(1)
console.log(2)
console.log(Vue)
//$("body").html("helloworld")
new Vue({
    el:"#demo",
    data:{
        name:"abc",
        img:__webpack_require__(13),
        text:__webpack_require__(14),
        json:__webpack_require__(15),
        html:__webpack_require__(16)
    },
    template:`
        <div>
            <p style="color:red">1.img</p>
            <img :src="img" />
            <p style="color:red">2.txt</p>
            <p>{{text}}</p>
            <p style="color:red">3.json</p>
            <p>姓名：{{json.name}}  年龄：{{json.age}}</p>
            <p style="color:red">4.html</p>
            <div v-html="html"></div>
            <p style="color:red">5.css</p>
            <div id="testcss">abcdefg</div>
        </div>
    `,
    methods:{
        tool:tool.add
    },
    mounted(){
        console.log(this.tool(1,2))
    }
    // render:function(createElement){
    //     return createElement("div",this.name)
    // }
})

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.13';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}

function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4).setImmediate))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(5);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports.add = function (a, b) {
    return a + b
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.8@css-loader/index.js!./test.css", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.8@css-loader/index.js!./test.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#testcss{\r\n    background-color: blue\r\n}", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "测试文本asdsd"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"name":"ly","age":"18"}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<p>123<span style=\"color:green\">456</span>789</p>";

/***/ })
/******/ ]);