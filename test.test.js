const arvishTest = require('arvish-test');

test('Basic', async () => {
	const arvish = arvishTest();

	const result = await arvish('node list.js mario');

	console.log(result);
});