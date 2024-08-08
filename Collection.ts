import { dataObj } from "./utils/utils";

export class Collection implements IterableIterator<dataObj>{
	protected data: typeof dataObj;
	protected _size: number;
	private idx = 0;

	constructor() {
	   this.data = {};
	   this._size = 0;
	}
  	push(element: any) {
	   this.data[this._size] = element;
	   this._size = this.size;
	   return this.data;
	};
	pop(): typeof dataObj {
	    delete this.data[this._size-1];
		this._size = this.size;
	    return this.data;
	};
    getElement(index: number) {
	   return this.data[index];
	};
    get(): typeof dataObj {
	   return this.data;
	} 
    get size(): number {
	   return Object.keys(this.data).length;
	}
	next(): IteratorResult<dataObj> {
	   if(this.idx < this.size) {
		  return {
			 done: false,
			 value: this.data[this.idx++]
		  }
	   } else {
		  return {
			 done: true,
			 value: null
		  }
	   }
	}
    [Symbol.iterator](): IterableIterator<dataObj> {
	   return this;
	}
	toString(): string {
	   let string = '[';
       for(let index = 0; index < this._size; index++) {
		  if(this.data[index] !== undefined) {
			 string += this.data[index];
			 if(index < this._size-1) string += ',';
		  }
	   }		  
	   string += ']';

	   return string;
	}
}
