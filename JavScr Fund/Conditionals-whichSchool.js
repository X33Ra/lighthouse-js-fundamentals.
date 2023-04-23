//In this challenge, we will write some logic to help learners decide which school they should attend.
 
function(age) {
// code here
  if (age < 13){
    return('you are currently', age ,'you belong to Elementary school')
  } else if(age >= 13 && age <= 18) {
   return('You are currently', age , ' you belong to Second School')
  } else {
    return('you do not belong in any groups do try Lighthouse')
  } 
}

whichSchool(35)