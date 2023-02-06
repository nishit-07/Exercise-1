var student=[
    {name:"nishit", age:19,rank:3,},
    {name:"rutvik",age:21,rank:3,},
    {name:"vardhit",age:20,rank:4,},
   { name:"bhavik",age:24,rank:1,},
   { name:"nirav",age:26,rank:6,}
]
   

var c=student.sort((a,b)=>a.age-b.age)
  var a=student.filter(age=>19)
var n=student.sort((a,b)=>a.rank-b.rank)
var r=student.sort((a,b)=>b.rank-a.rank)
// Map(student =>student.name)              
console.log(c);
console.log(a)

console.log(n);
console.log(r)


