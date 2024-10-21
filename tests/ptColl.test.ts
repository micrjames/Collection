import { Collection } from "../Collection";
import { pt, Point } from "../utils/Point";


describe("An array-like Collection of data", () => {
    console.log("A Collection of Points:");
	describe("When Created", () => {
	   let collection: Collection<pt>;
	   beforeAll(() => {
		  collection = new Collection<pt>();
		  console.log(`${collection.toString()}`);
	   });
	   test("Should exist.", () => {
		  expect(collection).toBeDefined();
	   });
	   test("Should be empty.", () => {
		  const isEmpty = collection.is_empty;
		  expect(isEmpty).toBeTruthy();
	   });
	   test("Should not give an item.", () => {
		  const data = collection.at(0);
		  expect(data).toBeNull();
	   });
	});
	describe("Basic operations", () => {
	   let collection: Collection<pt>;
	   let collSize: number;
	   beforeAll(() => {
		  collection = new Collection<pt>();
		  collSize = 0;
		  console.log("Basic Operations:");
	   });
	   describe("push", () => {
		  let pushValue: pt;
		  let pushIdx: number;
		  beforeAll(() => {
			 pushIdx = 0;
			 pushValue = new Point(0, 0).pt;
			 collection.push(pushValue);
			 collSize++;
		  });
		  test("Should not be empty.", () => {
			  expect(collection.is_empty).toBeFalsy();
		  });
		  test("Should retrieve the item that was 'push'ed.", () => {
			  const data = collection.at(pushIdx);
			  console.log(`Initial push: ${collection.toString()}`);
			  expect(data).toBe(pushValue);
		  });
		  test("Should be of a size of one element.", () => {
			  const size = collection.size;
			  expect(size).toBe(collSize);
		  });
	   });
	   describe("prepend", () => {
		  let prepValue: pt;
		  let prepIdx: number;
		  beforeAll(() => {
			 prepIdx = 0;
			 prepValue = new Point(1, 0).pt;
			 collection.prepend(prepValue);
			 collSize++;
		  });
		  test("Should prepend the given item to the Collection.", () => {
			  const data = collection.at(prepIdx);
			  console.log(`Prepend [Insert to 0th index] (${JSON.stringify(prepValue)}): ${collection.toString()}`);
			  expect(data).toBe(prepValue);
		  });
		  test("Should be of a size of two elements.", () => {
			  const size = collection.size;
			  expect(size).toBe(collSize);
		  });
	   });
	   describe("insert", () => {
		  let insValue: pt;
		  let insIdx: number;
		  let errIdx: number;
		  let errValue: pt;
		  describe("To middle index", () => {
			 beforeAll(() => {
				insIdx = 1;
				insValue = new Point(0, 1).pt;
				errIdx = -1;
				errValue = new Point(-100, -100).pt;
				collection.insert(insIdx, insValue);
				collSize++;
			 });
			 test("Should insert the given item at the specified index.", () => {
				 const data = collection.at(insIdx);
				 console.log(`Insert to ${insIdx}st index (${JSON.stringify(insValue)}): ${collection.toString()}`);
				 expect(data).toBe(insValue);
			 });
			 test("Should be of a size of three elements.", () => {
				 const size = collection.size;
				 expect(size).toBe(collSize);
			 });
			 test("Should throw an error if we are 'out of bounds'.", () => {
				 expect(() => {
					collection.insert(errIdx, errValue); 
				 }).toThrow("Out of Bounds.");
			 });
		  });
		  describe("At end", () => {
			 beforeAll(() => {
				insIdx = 3;
				insValue = new Point(-1, 0).pt;
				collection.insert(insIdx, insValue);
				collSize++;
			 });
			 test("Should insert the given item at the specified index.", () => {
				 const data = collection.at(insIdx);
				 console.log(`Insert to ${insIdx}rd index (${JSON.stringify(insValue)}): ${collection.toString()}`);
				 expect(data).toBe(insValue);
			 });
			 test("Should be of a size of three elements.", () => {
				 const size = collection.size;
				 expect(size).toBe(collSize);
			 });
			 test("Should throw an error if we are 'out of bounds'.", () => {
				 expect(() => {
					collection.insert(errIdx, errValue); 
				 }).toThrow("Out of Bounds.");
			 });
		  });
	   });
	   describe("find", () => {
		  let collSize: number;
		  let itemToFind: pt;
		  let errorValue: number;
		  let collString: string;
		  let collSlicedString: string;
		  let collSlicedSplitString: string[];
		  let foundIdx: number;
		  beforeAll(() => {
			 collSize = collection.size;
			 errorValue = -1;
			 itemToFind = new Point(0, 0).pt;
			 collString = collection.toString();
			 collSlicedString = collString.slice(1,-1);
			 collSlicedSplitString = collSlicedString.split(/},/);
			 collSlicedSplitString = collSlicedSplitString.map((str,idx,arr) => {
				if(idx !== arr.length-1) return str + '}';
				else return str;
			 });
			 foundIdx = collection.find(itemToFind);
		  });
		  test("Should find the specified item and return the first index of that item.", () => {
			 const CSSSIdx = collSlicedSplitString.findIndex(item => item == JSON.stringify(itemToFind));
			 console.log(`Find item ${JSON.stringify(itemToFind)} at ${CSSSIdx}nd index: ${collection.toString()}`);
			 expect(foundIdx).toBe(CSSSIdx);
		  });
		  test("Should still be of a size of three elements.", () => {
		  	 const CSSSSize = collSlicedSplitString.length;
			 expect(collSize).toBe(CSSSSize);
		  });
		  test(`Should return a value of ${errorValue} if the specified is not found.`, () => {
			 itemToFind = new Point(-100, -100).pt;
			 const errFindIdx = collection.find(itemToFind);
			 expect(errFindIdx).toBe(errorValue);
		  });
	   });
	});
	describe("Removal operations", () => {
	   let collection: Collection<pt>;
	   let collSize: number;
	   beforeAll(() => {
		  collection = new Collection<pt>();
		  console.log("Removal Operations:\n");
	   });
	   describe("pop", () => {
		  let pushValues: pt[];
		  beforeAll(() => {
			 pushValues = [
				new Point(1, 0).pt,
				new Point(0, 1).pt,
				new Point(0, 0).pt,
				new Point(-1, 0).pt
			 ];
			 collection.push(pushValues[0]);
			 collection.push(pushValues[1]);
			 collection.push(pushValues[2]);
			 collection.push(pushValues[3]);
			 collSize = collection.size;
			 console.log(`After four 'push' operations: ${collection.toString()}`);
		  });
		  test("Remove the item from the end of the collection and return the value.", () => {
			 const lastPushedValue = pushValues[pushValues.length-1];
			 const lastPushedValueIdx = collection.size-1;
			 const data = collection.pop();
			 collSize--;
			 console.log(`Pop item '${JSON.stringify(lastPushedValue)}' at ${lastPushedValueIdx}nd index: ${collection.toString()}`);
			 expect(data).toBe(lastPushedValue);
		  });
		  test("Should give a size that is one less than the size of the collection before the operation.", () => {
			 const newSize = collection.size;
			 expect(newSize).toBe(collSize);
		  });
	   });
   });
	/*
	   describe("delete", () => {
		  let delIdx: number;
		  let errIdx: number;
		  describe("From middle index", () => {
			 let itemToDelete: number;
			 let collString: string;
			 let collSlicedString: string;
			 let collSlicedSplitString: string[];
			 beforeAll(() => {
				delIdx = 1;
				errIdx = -1;
				collString = collection.toString();
				collSlicedString = collString.slice(1,-1);
				collSlicedSplitString = collSlicedString.split(",");
				itemToDelete = +collSlicedSplitString.find((_, idx) => idx === delIdx);
				collection.delete(delIdx);
				collSize--;
			 });
			 test("Should delete the given item from the specified index.", () => {
				 const data = collection.at(delIdx);
				 console.log(`Delete from ${delIdx}st index (${itemToDelete}): ${collection.toString()}`);
				 expect(data).not.toBe(itemToDelete);
			 });
			 test(`Should be of a size of ${collSize} elements.`, () => {
				 const size = collection.size;
				 expect(size).toBe(collSize);
			 });
		  });
		  describe("At end", () => {
			 let itemToDelete: number;
			 let collString: string;
			 let collSlicedString: string;
			 let collSlicedSplitString: string[];
			 beforeAll(() => {
				delIdx = collSize-1;
				errIdx = -1;
				collString = collection.toString();
				collSlicedString = collString.slice(1,-1);
				collSlicedSplitString = collSlicedString.split(",");
				itemToDelete = +collSlicedSplitString.find((_, idx) => idx === delIdx);
				collection.delete(delIdx);
				collSize--;
			 });
			 test("Should delete the given item from the specified index.", () => {
				 const data = collection.at(delIdx);
				 console.log(`Delete from ${delIdx}st index (${itemToDelete}): ${collection.toString()}`);
				 expect(data).not.toBe(itemToDelete);
			 });
			 test(`Should be of a size of ${collSize} elements.`, () => {
				 const size = collection.size;
				 expect(size).toBe(collSize);
			 });
		  });
		  describe("From outside of a existing index", () => {
			 test("Should throw an error if we are 'out of bounds'.", () => {
				 expect(() => {
					collection.delete(errIdx); 
				 }).toThrow("Out of Bounds.");
			 });
		  });
	   });
	   describe("remove", () => {
		  let remIdx: number;
		  describe("From starting index", () => {
			 let itemToRemove: number;
			 let collString: string;
			 let collSlicedString: string;
			 let collSlicedSplitString: string[];
			 beforeAll(() => {
				remIdx = 0;
				collString = collection.toString();
				collSlicedString = collString.slice(1,-1);
				collSlicedSplitString = collSlicedString.split(",");
				itemToRemove = +collSlicedSplitString.find((_, idx) => idx === remIdx);
				collection.remove(itemToRemove);
				collSize--;
			 });
			 test("Should remove the given item from the specified index.", () => {
				 const data = collection.at(remIdx);
				 console.log(`Delete from ${remIdx}th index (${itemToRemove}): ${collection.toString()}`);
				 expect(data).not.toBe(itemToRemove);
			 });
			 test(`Should be of a size of ${collSize} elements.`, () => {
				 const size = collection.size;
				 expect(size).toBe(collSize);
			 });
		  });
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
   */
});
