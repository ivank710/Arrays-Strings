//Is Unique: determine if a string has all unique characters. Cannot use additional data structures

const isUnique2 = str => {
  let result = new Set();

  for(let i = 0; i < str.length; i++) {
    let ch = str[i];

    if(!result.has(ch)) {
      result.add(ch);
    } else {
      return false;
    }
  }

  return true;
};


const isUnique = (str) => {
  let result = "";

  for(let i = 0; i < str.length; i++) {
    let ch = str[i];
    if(result.indexOf(ch) < 0) {
      result += ch;
    }
  }

  return result.length === str.length;
};

// console.log(isUnique("helo"));
// console.log(isUnique2("helo"));

