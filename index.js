// Your code here
/*
   
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

class Triangle extends Polygon {
  
  get isValid(){
    if (this.countSides === 3){
      let side1 = this.arr[0];
      let side2 = this.arr[1];
      let side3 = this.arr[2];
    
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
  
    }
  }
  
  
}