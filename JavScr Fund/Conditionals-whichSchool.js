//In this challenge, we will write some logic to help learners decide which school they should attend.
 
const whichSchool = function(age) {
// code here
if (age < 13){
  console.log('you are currently', age,'you belong to Elementary school')
  } else if(age >= 13 && age <= 18) {
    console.log('You are currently', age, ' you belong to Second School')
  } else {
    console.log('you do not belong in any groups do try Lighthouse')
  } 
}

whichSchool(35)