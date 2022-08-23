function primesUptoN(n) {
  var primes = [];
  primes[0] = false;
  primes[1] = false;
  for(let i = 2; i <= n; i++) {
    primes[i] = true;
  }
  for(let p = 2; p*p <= n; p++){
    if(primes[p] == true){
      for(let i = p*p; i <= n; i += p){
        primes[i] = false;
      }
    }
  }
  return primes;
}
