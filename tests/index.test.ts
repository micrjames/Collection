import { Collection } from "../Collection";
import { dataObj } from "../utils/utils";

describe("An array-like collection of data", () => {
	describe("When Created", () => {
	   let collection: Collection<number>;
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
	   });
	   describe("push", () => {
		  beforeAll(() => {
			 collection.push(1);
		  });
		  test("Should not be empty.", () => {
			  expect(collection.is_empty).toBeFalsy();
		  });
		  test("Should retrieve the item that was 'push'ed.", () => {
			  const data = collection.at(0);
			  expect(data).toBe(1);
		  });
		  test("Should be of a size of one element.", () => {
			  const size = collection.size;
			  expect(size).toBe(1);
		  });
	   });
	   describe("prepend", () => {
		  beforeAll(() => {
			 collection.prepend(2);
		  });
		  test("Should prepend the given item to the Collection.", () => {
			  const data = collection.at(0);
			  console.log(collection.toString());
			  expect(data).toBe(2);
		  });
		  test("Should be of a size of two elements.", () => {
			  const size = collection.size;
			  expect(size).toBe(2);
		  });
	   });
	   describe("insert", () => {
		  test.todo("Should insert the given item at the specified index.")
		  test.todo("Should be of a size of three elements.");
		  // insert(index, item)
	   });
	   describe("find", () => {
		  test.todo("Should find the specified item and return the first index of that item.");
		  test.todo("Should 'find' an item that is of type 'number'.");
		  test.todo("Should be of a size of three elements.");
		  // find(item) {
	   });
	});
	describe("Removal operations", () => {
	   let collection: Collection<number>;
	   let size: number;
	   beforeAll(() => {
		  collection = new Collection<number>();
		  collection.push(1);
		  collection.push(2);
		  collection.push(3);
		  size = collection.size;
	   });
	   describe("pop", () => {
		  test("Remove the item from the end of the collection and return the value.", () => {
			 const data = collection.pop();
			 expect(data).toBe(3);
		  });
		  test("Should give a size that is one less than the size of the collection before the operation.", () => {
			 const newSize = collection.size;
			 expect(newSize).toBe(size-1);
		  });
	   });
	   describe("delete", () => {
		  test.todo("Delete the item at the given index while shifting all trailing elements left.");
		  test.todo("Should give a size that is two less than the size of the collection before the operation.");
		  // delete(index)
	   });
	   describe("remove", () => {
		  test.todo("Looks for the given value and removes the index holding it."); 
		  test.todo("Should give a size that is three less than the size of the collection before the operation.");
		  // remove(item)
	   });
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
