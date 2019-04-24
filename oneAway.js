//There are three types of edits that can be performed on strings: insert, remove, or replace
//Given two strings, check if they are one edit (or zero edits) away
// Ex: pale, pal => true
//     pales, pale => true
//     pale, bake => false


const oneAway = (str1, str2) => {
  if(Math.abs(str1.length - str2.length) > 1) return false;
  let edits = 0;

  for(let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) edits += 1;
  }

  return edits <= 1;
};

console.log(oneAway("pale", "pal"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("bale", "pale"));
console.log(oneAway("bake", "pale"));