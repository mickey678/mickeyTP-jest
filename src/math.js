let Util = {};

Util.factorial = (n) => {
    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }
    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }
    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }
    if (0 === n) {
        return 1;
    }
    return n * Util.factorial(n - 1);
};
/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    if (n==0){
        return false;
      }
    if (n===1){
      return false;
    }
    else if(n === 2){
      return true;
    }else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;  
    }
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    if(n<2){
        return 0;
    }
    a = 0;
    for(i=2;i<n;i++){
        if(Util.isPrime(i) ==true){
            a+=i;
        }
    }
    return a;l
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
  var tab8 = [];
  for (let index = 1; index <= n; index++) {
    if(index%3==0 && index%5==0){
      tab8.push("FizzBuzz")
    }
    else if(index%3==0){
      tab8.push("Fizz");
    }else if(index%5==0){
      tab8.push("Buzz")
    } 
    else{
      tab8.push(index)
    }
  }
  return tab8;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Vojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
  var word = "";
  var letter = '';
  var ind = 0;
  for (let index = 0; index < phrase.length; index++) {
    ind = phrase.charCodeAt(index);
    letter = String.fromCharCode(ind+1);
    word+=letter;
  }
  return word.replace('!', ' ');
};


module.exports = Util;

