const { Collection } = require("../Collection");

describe("An array-like collection of data.", () => {
    const collection = new Collection();

	test("Should not be empty.", () => {
	    const data = collection.push(1);

		expect(data).not.toBeFalsy();
	});
	test.todo("Should push the items.");
	test.todo("Should retrive the items that are pushed.");
});
