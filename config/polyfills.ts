// tslint:disable no-typeof-undefined
// tslint:disable-next-line:no-any
declare var window: any;

if (typeof Promise === "undefined") {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React"s erratic future behavior.
  require("promise/lib/rejection-tracking").enable();
  window.Promise = require("promise/lib/es6-extensions.js");
}

// fetch() polyfill for making API calls.
require("whatwg-fetch");

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require("object-assign");

// Used by inversify for IoC.
require("reflect-metadata");

// IE11 doesn't fully support Map
require("es6-map/implement");

// tslint:enable no-typeof-undefined
