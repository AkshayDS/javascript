// Problem: Check if a Number is Prime
// A prime number is a number greater than 1 with no divisors other than 1 and itself.

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Only check up to square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// Find all primes up to n (Sieve of Eratosthenes)
function primesUpTo(n) {
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.reduce((primes, val, idx) => {
    if (val) primes.push(idx);
    return primes;
  }, []);
}

// Test cases
console.log(isPrime(7));    // true
console.log(isPrime(10));   // false
console.log(isPrime(29));   // true
console.log(isPrime(1));    // false

console.log("\nPrimes up to 50:", primesUpTo(50));
