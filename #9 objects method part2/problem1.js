// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle = {
    length : 10,
    width : 20,
    area : function(){
      console.log(this.length*this.width)
    },
    perimeter : function(){
      let peri = 2*(this.length+this.width)
      console.log(peri)
    },
  }
  rectangle.area()
  rectangle.perimeter()