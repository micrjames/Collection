# Collection
An array-like object which also implements an iterator.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working through implementing data structures. Starting with implementing a Set, I decided not to use an array as the basic container for the data to be held in the Set. As JavaScript/Typescript is so object-centric these days, especially since es6, I decided to create an array-like object with an iterator and implement a Set using that as the data container.

## Technologies Used
Only plain, vanilla Typescript is used with no libraries or other packages.

## Features
* An object with an iterator that functions as the container to hold data.
* Add an *item* to the Collection.
* Remove an *item* from the end of the Collection.
* *Remove* a specified *item* from the Collection.
* Get a particular element *at* a specific *index* of the Collection
* Get the *size* of the Collection.
* Similarly, determine whether the Collection *is_empty*.
* *Insert* an *item* at a specified *index*.
* Add an *item* to the beginning of the Collection.
* *Delete* an item from a specified *index* in the Collection.
* *Find* an *item* in the Collection.
* Get a listing of the elements contained in the Collection using an overloaded *toString* method.

## Setup
Just import the Collection object into your project.

## Usage
Instatiate the object.
```
    const coll = new Collection();
```
Add or Remove some elements to or from the Collection.
```
    coll.push(1);
    coll.push(2);
    coll.push(3);
    coll.push(4);
    coll.push(5);
    coll.pop();
    coll.pop();
```
The Collection contains the elements 1, 2, and 3. Or, we can get a particular element from the Collection. For instance, 3:
```
    coll.at(2);
```
And we can also get the size of the Collection.
```
    coll.size;
```
We can determine whether the Collection is empty.
```
	coll.is_empty;
```
In this case, since we have *push*ed the values above, this method call will return a *false* value as the collection is *not* empty. In addition to this method, we have another method which will allow us to look into the state of the Collection.
```
    coll.find(3);
```
Calling the *find* method with the *item* 3 as the argument will return 2, the *index* where that *item* is located.

Furthermore, there are methods which can be called on the Collection that can alter the *item*s contained in the Collection.
```
	collection.insert(1, 5);
```
Here, we have *insert*ed a value of 5 in the 1st position in the Collection. The other items in the Collection are shifted to an incremented index. The size of the Collection is increased and the last item in the previous iteration of the Collection is moved to that extended position. We now have the Collection as *[1, 5, 2, 3]*.

With the *prepend*, we can add an *item* to the beginning of the Collection.
```
	collection.prepend(6);
```
Now, we have as the Collection, *[6, 1, 5, 2, 3]*. In addition to these additive methods, we also have methods which can allow us to remove elements. We can either specify the *index* at which we would like to remove the *item* or we can specify the *item* that we would like to remove from the Collection.
```
	collection.delete(0);
```
The above example is the equivalent of calling the *pop* method and accomplishes the same result. Now, the Collection contains *[1, 5, 2, 3]*.
```
	collection.remove(2);
```
Finally, we have *remove*d the *item* 2 from the Collection. We, now, have as the Collection, *[1, 5, 3]*. As in the additive methods described above, the *item*s are shifted to reflect their new positions in the Collection.
## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 

## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
