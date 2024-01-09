interface dataObj {
    [index: number]: any;
}

class Collection {
	private data: typeof dataObj;
	private length: number;

	constructor() {
	   this.data = {};
	   this.length = 0;
	}
   	push(element: any) {
	   this.data[this.length] = element;
	   this.length++;
	   return this.data;
	};
    get(): typeof dataObj {
	   return this.data;
	} 
}

/*
implements Iterable<type>

:IterableIterator<number>

 this.pop = function() {
	    delete data[length-1];
	    length--;
	    return data;
	};
    this.getElement = function(index) {
	   return data[index];
	};
    this.length = function() {
	   return length;
	};
    // for .. of calls this function
    data[Symbol.iterator] = function() {
	   let index = 0;
	   let returnVal;
	   return {
		  index,
		  next() {
			 if(this.index <= length) {
				let currentVal = this.index++;
				// {
				// 		done: Boolean,
				// 		value: any
				// }
				returnVal = {
				   done: false,
				   value: data[currentVal]
				};
			 } else {
				returnVal = {
				   done: true
				};
			 }
			 // return an iterator
			 return returnVal;
		  }
	   }
	};
 */

exports.Collection = Collection;
