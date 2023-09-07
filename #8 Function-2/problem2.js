function mylastindex(array,value){
    for(let i=array.length-1; i>=0; i--){
      if(array[i]==value){
        return i;
      }
    }
    return-1;
  }
  let array1 = ['Animals','Mammals','Aves','Reptiles'];
  let value1= "Reptiles"
  let result = mylastindex(array1,value1)
  console.log(result)