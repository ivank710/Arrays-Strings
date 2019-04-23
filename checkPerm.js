//Given 2 strings, write a method to decide if one is a permutation of the other

//SHOULD ASK: case

const makeObj = str => {
  let result = {};

  for(let i = 0; i < str.length; i++) {
    let ch = str[i];

    if(result[ch] === undefined) {
      result[ch] = 1;
    } else {
      result[ch] += 1;
    }
  }

  return result;
};

// console.log(makeObj("hello"))

const checkPerm = (str1, str2) => {
  //obj with keys as chars and vals as occurrences
  //loop thru one obj
    //check if the val for a key is the same in the other

  let obj1 = makeObj(str1);
  let obj2 = makeObj(str2);
  
  for(let k in obj1) {
    if(obj1[k] !== obj2[k]) {
      return false;
    }
  }

  return true;
};

console.log(checkPerm("hello", "ellh"));