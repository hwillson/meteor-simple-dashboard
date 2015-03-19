Package.describe({
	name: "velocity:test-proxy",
	summary: "Dynamically created package to expose test files to mirrors",
	version: "0.0.4",
	debugOnly: true
});

Package.onUse(function (api) {
	api.use("coffeescript", ["client", "server"]);
	api.add_files("tests/mocha/client/lib/setup.js",["client"]);
	api.add_files("tests/mocha/client/views/common/sidebar.spec.js",["client"]);
	api.add_files("tests/mocha/client/views/customers/customer_address.spec.js",["client"]);
	api.add_files("tests/mocha/client/views/customers/customer_audit.spec.js",["client"]);
	api.add_files("tests/mocha/client/views/customers/customer_details.spec.js",["client"]);
	api.add_files("tests/mocha/client/views/customers/customer_list.spec.js",["client"]);
	api.add_files("tests/mocha/client/views/customers/customer_notes.spec.js",["client"]);
	api.add_files("tests/mocha/client/views/export/export.spec.js",["client"]);
	api.add_files("tests/mocha/client/views/welcome/welcome.spec.js",["client"]);
	api.add_files("tests/mocha/server/lib/setup.js",["server"]);
	api.add_files("tests/mocha/server/sampleServerTest.js",["server"]);
});