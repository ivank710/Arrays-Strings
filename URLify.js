//write a method to replace all spaces in a string with "%20"

const URLify = (str) => {
  return str.split(" ").join("%20");
};

const URLify2 = str => {
  let result = "";

  for(let i = 0; i < str.length; i++) {
    let ch = str[i];

    if(ch === " ") {
      result += "%20";
    } else {
      result += ch;
    }
  }

  return result;
};


console.log(URLify2("Hello John Smith"));