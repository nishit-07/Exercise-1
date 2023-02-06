function obj1(name,age,city,country){
    return {name,age,city,country
}}
let student1=obj1('nishit',19,'rajkot','india')
console.log('student1',student1)

function student(name,age,city,country){
    this.name;
    this.age;
    this.city;
    this.country;
}
let student2=new student('bhavik',22,'rajkot','india');
console.log('student2:',student2)