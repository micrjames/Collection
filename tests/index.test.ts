import { Collection } from "../Collection";
import { dataObj } from "../utils/utils";

describe("An array-like collection of data", () => {
	describe("When Created", () => {
	   let collection: Collection<number>;
	   let value: number;
	   let data: dataObj<number>;
	   let element: dataObj<number>; 
	   let size: number;
	   beforeAll(() => {
		  collection = new Collection<number>();
	   });
	   test("Should exist.", () => {
		  expect(collection).toBeDefined();
	   });
	   test("Should be empty.", () => {
		  const isEmpty = collection.is_empty;
		  expect(isEmpty).toBeTruthy();
	   });
	});
	describe("Basic operations", () => {
	   let collection: Collection<number>;
	   beforeAll(() => {
		  collection = new Collection<number>();
		  collection.push(1);
		  console.log(collection.toString());
	   });
	   test("Should not be empty.", () => {
		   expect(collection.is_empty).toBeFalsy();
	   });
	   test("Should retrieve the item.", () => {
		   const data = collection.at(0);
		   expect(data).toBe(1);
	   });
	   test("Should be of given length.", () => {
		   const size = collection.size;
		   expect(size).toBe(1);
	   });
	   test.todo("Should prepend the given item to the Collection.");
	   // prepend(item)
	   test.todo("Should insert the given item at the specified index.")
	   // insert(index, item)
	   test.todo("Should find the specified item and return the first index.");
	   // find(item) {
	});
	describe("Removal operations", () => {
	   test.todo("Remove the item from the end of the collection and return the value.");
	   /*
	   data = collection.pop();
	   expect(data).toEqual({});
	   */
	   // pop()
	   test.todo("Delete the item at the given index while shifting all trailing elements left.");
	   // delete(index)
	   test.todo("Looks for the given value and removes the index holding it."); 
	   // remove(item)
	});
	describe("That is iterable", () => {
	   describe("Gives each value of the Collection.", () => {
		  let collection: Collection<number>;
		  beforeAll(() => {
			 collection = new Collection<number>();
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
		  test.todo("Should be 2.");
		  test.todo("Should be 3.");
		  test.todo("Should be 4.");
		  test.todo("Should be 5.");
		  test.todo("Should be null.");
	   });
	   describe("Gives the values as an array.", () => {
		  let collection: Collection<number>;
		  let collectionArr: dataObj<number>[];
		  beforeAll(() => {
			 collection = new Collection<number>();
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
