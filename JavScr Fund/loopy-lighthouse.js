//Agenda* to write a program that counts from 100 to 200
//challenges
//If the number is a multiple of 3, print the string "Loopy" instead of the number.
//If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
//If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

for(i=100; i<=200; i++){
  if (i % 3 === 0 && i % 4 === 0){
    console.log('LoopyLighthouse')
  } else if (i % 4 ===0){
    console.log('Lighthouse')
  } else if (i % 3 === 0){
    console.log('Loopy')
  } else {
    console.log(i)
  }
}
