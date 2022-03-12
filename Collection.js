function Collection() {
	let data = {};
	let length = 0;
   	this.push = function(element) {
	   data[length] = element;
	   length++;
	   return data;
	};
    this.pop = function() {
	    delete data[length-1];
	    length--;
	    return data;
	};
    this.get = function() {
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
}
