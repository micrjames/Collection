const { Collection } = require("../Collection");
import { dataObj } from "../utils/utils";

describe("An array-like collection of data.", () => {
	describe("Basic operations.", () => {
	   let collection: typeof Collection;
	   let value: number;
	   let data: dataObj;
	   let element; 
	   let size: number;
	   beforeAll(() => {
		  collection = new Collection();
		  value = 1;
	   });
	   test("Should not be empty.", () => {
		   expect(collection.push(value)).not.toBeFalsy();
	   });
	   test("Should push the item.", () => {
		   data = collection.get();
		   expect(data[0]).toBe(value);
	   });
	   test("Should retrive the items.", () => {
		   element = collection.getElement(0);
		   expect(element).toBe(value);
	   });
	   test("Should be of given length.", () => {
		   size = collection.size;
		   expect(size).toBe(1);
	   });
	   test("Should pop the items.", () => {
		   data = collection.pop();
		   expect(data).toEqual({});
	   });
	});
	describe("That is iterable.", () => {
	   describe("Gives each value of the Collection.", () => {
		  let collection: typeof Collection;
		  beforeAll(() => {
			 collection = new Collection();
			 collection.push(1);
			 collection.push(2);
			 collection.push(3);
			 collection.push(4);
			 collection.push(5);
		  });
		  test("Should be 1.", () => {
			 const nextEl = collection.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(1);
		  });
		  test("Should be 2.", () => {
			 const nextEl = collection.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(2);
		  });
		  test("Should be 3.", () => {
			 const nextEl = collection.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(3);
		  });
		  test("Should be 4.", () => {
			 const nextEl = collection.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(4);
		  });
		  test("Should be 5.", () => {
			 const nextEl = collection.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(5);
		  });
		  test("Should be null.", () => {
			 const nextEl = collection.next();
			 expect(nextEl.done).toBeTruthy();
			 expect(nextEl.value).toBeNull();
		  });
	   });
	   describe("Gives the values as an array.", () => {
		  let collection: typeof Collection;
		  let collectionArr: number[];
		  beforeAll(() => {
			 collection = new Collection();
			 collection.push(1);
			 collection.push(2);
			 collection.push(3);
			 collection.push(4);
			 collection.push(5);

			 collectionArr = [...collection];
		  });
		  test("Should not be empty.", () => {
			 expect(collectionArr).not.toBeFalsy();
		  });
		  test("Should contain 5 elements.", () => {
			 expect(collectionArr).toHaveLength(5);
		  });
		  test("Should equal '[1, 2, 3, 4, 5]'", () => {
			 expect(collectionArr).toEqual([1, 2, 3, 4, 5]);
		  });
		  test("Should iterate the elements.", () => {
			 collectionArr.forEach((el, i) => {
				expect(el).toBe(i + 1);
			 });
			 let idx = 0;
			 for(const el of collectionArr) {
				++idx;
				expect(el).toBe(idx);
			 }
		  });
	   });
	});
});
