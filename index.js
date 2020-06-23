// Your code here
/*
   
    Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.

    Define a Triangle class that inherits from Polygon.

    It will automatically have access to count and perimeter inherited from Polygon.

    Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.

*/
class Polygon{
  constructor(arr){
    this.arr = arr;
  }
  get countSides(){
    return this.arr.length;
  }
  get perimeter(){
    let sum = 0;
    for(let i = 0; i < this.arr.length; i++){
      sum += this.arr[i];
    }
    return sum;
    
  }
}