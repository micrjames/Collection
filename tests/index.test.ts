const { Collection } = require("../Collection");

describe("An array-like collection of data.", () => {
	describe("Basic operations.", () => {
	   const collection = new Collection();
	   const value = 1;
	   test("Should not be empty.", () => {
		   expect(collection.push(value)).not.toBeFalsy();
	   });
	   test("Should push the item.", () => {
		   const data = collection.get();
		   expect(data[0]).toBe(value);
	   });
	   test("Should retrive the items.", () => {
		   const element = collection.getElement(0);
		   expect(element).toBe(value);
	   });
	   test("Should be of given length.", () => {
		   const size = collection.size;
		   expect(size).toBe(1);
	   });
	   test("Should pop the items.", () => {
		   const data = collection.pop();
		   expect(data).toEqual({});
	   });
	});
	describe("That is iterable.", () => {
	   const collection = new Collection();
	   collection.push(1);
	   collection.push(2);
	   collection.push(3);
	   collection.push(4);
	   collection.push(5);
	   const collectionArr = [...collection];
	   test("Should be a collection of 5 items.", () => {
		   console.log(collection.size);
		   expect(collectionArr).toHaveLength(collection.size);
	   });
	   test("Should output a collection of the 5 items contained.", () => {
		   expect(collectionArr).toEqual([1, 2, 3, 4, 5]);
	   });
	});
});
