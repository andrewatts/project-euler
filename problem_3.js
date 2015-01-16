//repl.it/7z4/1
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function primeFactors(n) {
    for(var i=2; i<n;) {
        if(n%i===0) {
            console.log(i);
            n/=i;
            i=2;
        } else {
            i++;
        }
    }
    return n;
}

primeFactors(600851475143);

/*
function primeFactors(n) {

//iterate through numbers up to n starting with 2
    for(var i=2; i<n;) {

//if n is evenly divisble by i
        if(n%i===0) {
        
//print i
            console.log(i);

//divide n by i and update n
            n/=i;

//start loop over and reset i as 2
            i=2;
            
//if n is not evenly divisible by i skip to the next number
        } else {
            i++;
        }
    }
    
//return the last/largest prime factor
    return n;
}

primeFactors(600851475143);
*/