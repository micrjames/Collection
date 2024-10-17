import { dataObj } from "./utils/utils";
import { StringBuilder } from "./StringBuilder/StringBuilder";

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
	   return this.data;
	};
	// returns the item at a given index, blows up if index out of bounds
    at(index: number): T {
	   return this.data[index];
	};
	// inserts item at index, shifts that index’s value and trailing elements to the right.
	insert(index: number, item: T) {
	}
	// can use insert above at index 0
	prepend(item: T) {
	}
	// remove from end, return value
	pop(): T {
	    const data = this.data[this._size-1];
	    delete this.data[this._size-1];
		this._size--;
	    return data;
	}
	// delete item at index, shifting all trailing elements left
	delete(index: number) {
	} 
	// looks for value and removes index holding it (even if in multiple places)
	remove(item: T) {
	} 
	// looks for value and returns first index with that value, -1 if not found
	find(item: T) {
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
       for(let index = 0; index < this._size; index++) {
		  if(this.data[index] !== undefined) {
			 sb.append(`${this.data[index]}`);
			 if(index < this._size-1) sb.append(',');
		  }
	   }		  
	   sb.append(']');

	   return sb.build();
	}
}

/*
 */
