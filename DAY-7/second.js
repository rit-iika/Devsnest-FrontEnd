//question 1
 var student = { name : "David Rayy", sclass : "VI", rollno : 12 }
 console.log(Object.keys(student));

//question 2
var student2 = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student2);
//to delete roll no 
delete student2.rollno;
console.log(student2);

//question 3
var student3 = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student3).length);

//question 4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
console.log(Object.values(library[0]));
console.log(Object.values(library[1]));
console.log(Object.values(library[2]));

//question 5
class Vol {
    constructor(rad, height) {
      this.rad = rad;
      this.height = height;
     console.log("volume of your cylinder is: ",3.141*rad*rad*height);
    }
  }
  let vol1= new Vol(2,5);
  let vol2= new Vol(1,2);
