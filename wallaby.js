const path = require("path");

module.exports = (wallaby) => ({
	compilers: {
		"**/*.ts?(x)": wallaby.compilers.typeScript({
			compilerOptions: {
				target: "es3",
			},
		}),
	},

	env: {
		type: "node",
	},

	files: [
		"package.json",
		"src/**/*.ts",
		"!src/**/*.test.ts",
		"src/**/*.tsx",
		"!src/**/*.test.tsx",
		"src/External/**/*.js",
	],

	filesWithNoCoverageCalculated: [
		"src/Adapters/**",
		"src/Entry/**",
		"src/External/**",
		"src/*.tsx",
		"src/*.ts",
	],

	preprocessors: {
		"**/*.css": () => ({}),
	},

	setup: () => {
		Error.stackTraceLimit = Infinity;

		const initializer = () => {
			const jestConfig = require("./package.json").jest;
			const cssMockFile = require("path").join(wallaby.localProjectDir, "test/jestCssPreprocessor.js");

			jestConfig.moduleNameMapper[".*\.css$"] = cssMockFile;

			wallaby.testFramework.configure(jestConfig);
		};

		try {
			initializer();
		} catch (error) {
			const initializationRetryTime = 500;

			console.log(error);
			console.log(error.stack);
			console.error("Failed to initialize Wallaby.js!");
			console.error("Please comment with the preceding error details at:");
			console.error("    https://github.com/wallabyjs/public/issues/1371");

			wallaby.delayStart();
			setTimeout(
				() => {
					initializer();
					wallaby.start();
				},
				initializationRetryTime);
		}
	},

	testFramework: "jest",

	tests: [
		"src/**/*.test.ts",
		"src/**/*.test.tsx",
	],
});
