import { dataObj } from "./utils/utils";

class Collection implements Iterable<any>{
	protected data: typeof dataObj;
	protected _size: number;

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
    *[Symbol.iterator](): IterableIterator<any> {
	   let index = 0;
	   while(index < this._size) {
	      yield this.data[index++];
	   }
	}
	toString(): string {
	   let string = '[';
       for(let index = 0; index < this._size; index++) {
		  if(this.data[index]) {
			 string += this.data[index];
			 if(index < this._size-1) string += ',';
		  }
	   }		  
	   string += ']';

	   return string;
	}
}

exports.Collection = Collection;
