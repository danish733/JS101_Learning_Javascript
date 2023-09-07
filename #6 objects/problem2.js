let arr = [
    {
      grade: "V",
      students: [
        { name: "Nrupul", marks: [10, 20, 30] },
        { name: "Prateek", marks: [20, 30, 40] }
      ]
    },
    {
      grade: "VI",
      students: [
        { name: "Aman", marks: [10, 20, 30] },
        { name: "Albert", marks: [20, 30, 40] }
      ]
    },
    {
      grade: "VII",
      students: [
        { name: "Yogesh", marks: [10, 20, 30] },
        { name: "Sandhya", marks: [20, 30, 40] }
      ]
    }
  ];
  
  
  
  
  for(let i=0; i<arr.length; i++){
    let grade = arr[i].grade;
    let name=null;
    let max=-Infinity;
    for(let j=0; j<arr[i].students.length; j++){
      let sum=0;
      for(let k=0; k<arr[i].students[j].marks.length; k++){
        sum+=arr[i].students[j].marks[k]
      }
      if(sum>max){
        max=sum;
        name=arr[i].students[j].name;
      }
      
    }
    console.log(grade+"-"+name+"-"+max);
  }