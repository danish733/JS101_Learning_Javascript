function mySlice(arr, start, end){
    if(start<(-(arr.length))){
      start =0;
    }
    if(start<0){
      start = arr.length + start;
    }
    if(end==undefined){
      end = arr.length
    }
    else if(end>arr.length){
      end = arr.length
    }
  
    let newArr = []
    for(let i=start;i<end;i++){
      newArr.push(arr[i])
    }
    return newArr
  }
  
  let arr = [41,22,83,34,85,6,67,18,19]
  let result = mySlice(arr,1,6)
  console.log(result)
  