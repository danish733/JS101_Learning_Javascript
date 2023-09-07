// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let data = {
    arr : [],
    productAdd : function(name,quantity,price){
      let obj = {}
      obj.name = name
      obj.quantity = quantity
      obj.price = price
  
      this.arr.push(obj)
    },
    total : function(){
    let sum = 0
      for(let i in this.arr){
        sum+=this.arr[i].quantity*this.arr[i].price
      }
      console.log(sum)
    }
  }
  data.productAdd("Rice",2,60)
  data.productAdd("Dal",3,50)
  data.productAdd("Salt",1,20)
  data.total()
  
  