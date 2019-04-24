

const compStr = str => {
  let result = "";
  let obj = {};
  let key = str[0];

  for(let i = 0; i < str.length; i++) {
    let ch = str[i];
    
    if(obj[ch] === undefined) {
      obj[ch] = 1;
    } else {
      obj[ch] += 1;
    }

    if(key !== ch) {
      let res = key + JSON.stringify(obj[key]);
      result += res;
      delete obj[key];
      // console.log(obj)
      key = ch;
    }

    if(i === str.length - 1) {
      let res = key + JSON.stringify(obj[key]);
      result += res;
    }
  }


  return result.length < str.length ? result : str;
};

console.log(compStr("aabcccccaaa")); //a2b1c5a3