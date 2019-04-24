//Given a string, check if its a permutation of a palindrome. Can ignore casing and non-letter characters

const makeObj = str => {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (result[ch] === undefined) {
      result[ch] = 1;
    } else {
      result[ch] += 1;
    }
  }

  return result;
};

//ede, deed
const palPerm = str => {
  str = str.split(" ").join("");
  let oddCount = 0;

  let obj = makeObj(str);
  let vals = Object.values(obj);
  let sum = 0;

  for(let i = 0; i < vals.length; i++) {
    sum += vals[i];
  }

  if(str.length % 2 === 0) {
    return sum % 2 === 0;
  } else {
    return sum % 2 !== 0;
  }

  // for(let k in obj) {
  //   if(str.length % 2 === 0) {
  //     if(obj[k] % 2 !== 0) {
  //       return false;
  //     }
  //   } else {
  //     if(obj[k] % 2 !== 0) {
  //       oddCount += 1;
  //     }
  //   }
  // }

  // if(str.length % 2 !== 0 && oddCount === 1) return true;

  // return true;
};

console.log(palPerm("civic bob"));