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
I wrote this as part of working through implementing data structures. Starting with implementing a Set, I decided not to use an array as the basic container for the data to be held in the Set. As JavaScript is so object-centric these days, especially since es6, I decided to create an array-like object with an iterator and implement a Set using that as the data container.

## Technologies Used
I'm only using plain, vanilla JavaScript with no libraries or other packages.

## Features
* An object with an iterator that functions as the container to hold data.
* Add an element to the Collection 
* Remove an element from the end of the Collection 
* Get all the elements of the Collection
* Get any particular of the Collection
* Get the length of the Collection

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
The Collection contains the elements 1, 2, and 3. We can also get all the data from the Collection.
```
coll.get();
```
Or, we can get a particular element from the Collection. For instance, 3:
```
coll.getElement(2);
```
And we can also get the length of the Collection.
```
coll.length();
```
## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 

## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @micrjamesjr on twitter or on github @micrjames
