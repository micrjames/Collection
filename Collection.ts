import { dataObj } from "./utils/utils";
import { StringBuilder } from "./StringBuilder/StringBuilder";
import { Range } from "./Range/range";

export class Collection<T> implements IterableIterator<dataObj<T>>{
	protected data: dataObj<T>;
	protected _size: number;
	protected _capacity: number;
	private idx = 0;
	constructor() {
	   this.data = {};
	   this._size = 0;
	}
	// get the number of items
    get size(): number {
	   return this._size;
	}
	/*
   	// the number of items it can hold
	get capacity(): number {
	   return 0;
	}
	resize(new_capacity) // private
		◦ when you reach capacity, resize to double the size
		◦ when popping an item, if the size is 1/4 the capacity, resize to half.

    */
	get is_empty(): boolean {
	   return this._size === 0;
	}
  	push(item: T) {
	   this.data[this._size] = item;
	   this._size++;
	};
	// returns the item at a given index, blows up if index out of bounds
    at(index: number): T {
	   return this.data[index];
	};
	// inserts item at index, shifts that index’s value and trailing elements to the right.
	insert(index: number, item: T) {
	   if(index < 0 || index > this._size)
		  throw new Error("Out of Bounds.");
	   const idxs = [...new Range(this._size+1)];
	   const revIdxs = idxs.reverse();
	   let value: T; 
	   revIdxs.forEach(idx => {
		  /*
		  if(idx === index) {
			 value = item;
		  } else if(idx > index) {
			 value = this.data[idx - 1];
		  } else if(idx < index) {
			 value = this.data[idx];
		  }
		  */
		  value = idx > index ? this.data[idx-1] : idx === index ? item : this.data[idx];
		  this.data[idx] = value;
	   });
	   this._size++;
	}
	// can use insert above at index 0
	prepend(item: T) {
	   /*
	   const idxs = [...new Range(this._size+1)];
	   const revIdxs = idxs.reverse();
	   let value: T; 
	   revIdxs.forEach(idx => {
		  value = idx > 0 ? this.data[idx-1] : item;
		  this.data[idx] = value;
	   });
	   this._size++;
	   */
	   this.insert(0, item);
	}
	// remove from end, return value
	pop(): T | null	{
		if(this.is_empty) return null;
	    const data = this.data[this._size-1];
	    delete this.data[this._size-1];
		this._size--;
	    return data;
	}
	// delete item at index, shifting all trailing elements left
	delete(index: number) {
	   if(index < 0 || index > this._size)
		  throw new Error("Out of Bounds.");
	   const idxs = [...new Range(this._size)];
	   let value: T;
	   idxs.forEach(idx => {
		  value = idx >= index ? this.data[idx+1] : this.data[idx];
		  this.data[idx] = value;
	   });
	   this._size--;
	   delete this.data[this._size];
	} 
	// looks for value and removes index holding it (even if in multiple places)
	remove(item: T) {
	   const remIdx = this.find(item);
	   this.delete(remIdx);
	} 
	// looks for value and returns first index with that value, -1 if not found
	find(item: T): number {
	   const idxs = [...new Range(this._size)];
	   let foundIdx: number; 
	   foundIdx = idxs.filter(idx => this.data[idx] === item).pop();
	   return foundIdx !== undefined ? foundIdx : -1;
	} 
	/*
	O(1) to add / remove at end, index, or update
	O(n) to insert/remove elsewhere.
	 */
	next(): IteratorResult<dataObj<T>> {
	   if(this.idx < this._size) {
		  return {
			 done: false,
			 value: this.data[this.idx++] as any
		  }
	   } else {
		  return {
			 done: true,
			 value: null
		  }
	   }
	}
    [Symbol.iterator](): IterableIterator<dataObj<T>> {
	   return this;
	}
	toString(): string {
	   const sb = new StringBuilder();
	   sb.append('[');
       for(let index = 0; index <= this._size; index++) {
		  if(this.data[index] !== undefined) {
			 sb.append(`${this.data[index]}`);
			 if(index < this._size-1) sb.append(',');
		  }
	   }		  
	   sb.append(']');

	   return sb.build();
	}
}
