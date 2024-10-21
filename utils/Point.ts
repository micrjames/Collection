export interface pt {
   _x: number;
   _y: number;
}

export class Point {
   protected _pt: pt;

   constructor(x: number, y: number) {
	  this._pt = {
		 _x: x,
		 _y: y
	  };
   }
   get pt(): pt {
	  return this._pt;
   }

   get x(): number {
	  return this._pt._x;
   }
   get y(): number {
	  return this._pt._y;
   }
   set x(x: number) {
	  this._pt._x = x;
   }
   set y(y: number) {
	  this._pt._y = y;
   }

   toString(): string {
	  return JSON.stringify(this._pt);
   }
}
