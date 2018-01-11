require("raf/polyfill");
require("jest-enzyme");

const { configure } = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");
const { setIconOptions } = require("office-ui-fabric-react/lib/Styling");

// See https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

configure({
	adapter: new EnzymeAdapter(),
});

const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

const copyProps = (src, target) => {
	const props = Object.getOwnPropertyNames(src)
		.filter((prop) => typeof target[prop] === "undefined")
		.map((prop) => Object.getOwnPropertyDescriptor(src, prop));

	Object.defineProperties(target, props);
};

global.window = window;
global.document = window.document;
global.navigator = {
	userAgent: "node.js",
};

copyProps(window, global);

// External dependencies such as Office UI Fabric tend to log complaints, which should fail tests

const replaceMethod = (containerName, methodName) => {
	global[containerName][methodName] = (...args) => {
		throw new Error(`[${containerName}.${methodName}]: ${args.join(" ")}`);
	};
};

replaceMethod("console", "error");
replaceMethod("console", "log");
replaceMethod("console", "warn");

// See https://github.com/OfficeDev/office-ui-fabric-react/wiki/Using-icons#disabling-generated-warnings

setIconOptions({
	disableWarnings: true,
});
