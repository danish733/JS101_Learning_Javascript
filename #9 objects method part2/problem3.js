
// SAMPLE INPUT :

// var sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];




// EXPECTED OUTPUT (array of objects):


// [
//   {
//     item: "PS4 Pro",
//     original: 399.99,
//     sale: 399.99,
//     stock: 3,
//     total: 1199.97
//   },
//   {
//     discount: 0.1,
//     item: "Xbox One X",
//     original: 499.99,
//     sale: 449.991,
//     stock: 1,
//     total: 449.991
//   },
//   {
//     item: "Nintendo Switch",
//     original: 299.99,
//     sale: 299.99,
//     stock: 4,
//     total: 1199.96
//   },
//   {
//     discount: 0.8,
//     item: "PS2 Console",
//     original: 299.99,
//     sale: 59.99799999999999,
//     stock: 1,
//     total: 59.99799999999999
//   },
//   {
//     discount: 0.65,
//     item: "Nintendo 64",
//     original: 199.99,
//     sale: 69.9965,
//     stock: 2,
//     total: 139.993
//   }
// ]


var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  function calculateSalesTotals(sales) {
    let arr = [];
  
    for (let i = 0; i < sales.length; i++) {
      let obj = {};
  
      obj.item = sales[i].item;
      obj.stock = sales[i].stock;
      obj.original = sales[i].original;
  
      if (sales[i].discount === undefined) {
        obj.sale = sales[i].original;
      }
      else {
        obj.sale = sales[i].original * (1 - sales[i].discount);
        obj.discount = sales[i].discount;
      }
  
      obj.total = obj.sale * obj.stock;
  
      arr.push(obj);
    }
  
    return arr;
  }
  
  console.log(calculateSalesTotals(sales));