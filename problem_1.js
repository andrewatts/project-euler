//repl.it/8KD
var instructions = "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.";

console.log(instructions + "\n");
console.log("Multiples of 3 or 5 below 1000: " + "\n" );

var sum = 0;

for (var i=1; i<1000; i++) {
  
  var multiplesOfThree = i%3===0;
  var multiplesOfFive = i%5===0;

  if (multiplesOfThree || multiplesOfFive) {
    console.log(i);
    sum += i;
  }
}

console.log("\n" + "The sum of all the multiples of 3 or 5 is: " + sum);