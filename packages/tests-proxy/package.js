Package.describe({
	name: "velocity:test-proxy",
	summary: "Dynamically created package to expose test files to mirrors",
	version: "0.0.4",
	debugOnly: true
});

Package.onUse(function (api) {
	api.use("coffeescript", ["client", "server"]);
	api.add_files("tests/mocha/client/common/sidebar.spec.js",["client"]);
	api.add_files("tests/mocha/client/customers/customer_address.spec.js",["client"]);
	api.add_files("tests/mocha/client/customers/customer_details.spec.js",["client"]);
	api.add_files("tests/mocha/client/customers/customer_list.spec.js",["client"]);
	api.add_files("tests/mocha/client/export/export.spec.js",["client"]);
	api.add_files("tests/mocha/client/lib/setup.js",["client"]);
	api.add_files("tests/mocha/client/welcome/welcome.spec.js",["client"]);
	api.add_files("tests/mocha/server/sampleServerTest.js",["server"]);
});