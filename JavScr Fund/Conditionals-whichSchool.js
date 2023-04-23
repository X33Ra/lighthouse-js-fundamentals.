//In this challenge, we will write some logic to help learners decide which school they should attend.
 
function(age) {
// code here
if (age < 13){
  return('Elementary School')
} else if(age >= 13 && age <= 18) {
  return('Secondary School')
} else {
  return('Lighthouse Labs')
} 
}

whichSchool(35)