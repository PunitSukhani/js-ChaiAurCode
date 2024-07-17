"use strict" ; // use all JS code as newer version 

/*
number => upto 2 ^ 53
bigint = for large numbers
string = ""
boolean = true/false
null = standalone value (type = object)
undefined (type = undefined)
symbol = uniquness

object
*/

console.log(typeof null) 
console.log(typeof undefined)

/*
1) Primitive Datatypes (by value)
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes (by refrence)
       Arrays  =>  object
       Function  =>  function object
       Object  =>  object
*/

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime