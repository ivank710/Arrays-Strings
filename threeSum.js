
const merge = (arr1, arr2) => {
  let result = [];

  while (arr1.length || arr2.length) {
    let el1 = arr1.length ? arr1[0] : Infinity;
    let el2 = arr2.length ? arr2[0] : Infinity

    if (el1 < el2) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }


  return result;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let midIdx = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, midIdx);
  let rightHalf = arr.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}


var threeSum = function (nums) {
  let result = [];

  nums = mergeSort(nums);
  console.log(nums);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      let start = i + 1;
      let end = nums.length - 1;

      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          result.push([nums[i], nums[start], nums[end]]);
        }

        if (nums[i] + nums[start] + nums[end] < 0) {
          let currStart = start;
          while (currStart === start && start < end) {
            start++;
          }
        } else {
          let currEnd = end;
          while (currEnd === end && start < end) {
            end--;
          }
        }
      }
    }
  }

  return result;
};

let nums = [2, -1, 0, -1, 1, -4];

console.log(threeSum(nums));