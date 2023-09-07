function mySubString(str, start, end){
  
    if(start>end){
      let temp = start
      start= end
      end = temp;
    }
    if(start<0){
      start=0;
    }
    if(end>str.length){
      end = str.length
    }
  
    return str.slice(start,end)
  }
  let str = "Mozilla"
  let result = mySubString(str,6,-3)
  console.log(result)