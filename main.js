// =========== Exercise #1 ============

/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for (let i = 0; i < dog_names.length; i++) 
        if ( dog_string.includes(dog_names[i]) ) {
            return 'Matched dog_name'
        } else {
            return 'No Matches'
        }
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let names = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index")
        }
    };
    return arr
}

console.log(replaceEvens(names))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// ========= Codewars Problem #1 - Vowel Count =======
// Return the number (count) of vowels in the given string.
let str = "keako"

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0 
    
    for (let char of str) {
      if ( vowels.includes(char)) {
        counter++;
      }
    }
    return counter
  }

  console.log(getCount(str))


//   ======== Codewars Problem #2 - DNA to RNA Conversion ==========
// Create a function which translates a given DNA string into RNA.

let dna1 = "GACCGTCGCT"

function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U')
  }

console.log(DNAtoRNA(dna1))