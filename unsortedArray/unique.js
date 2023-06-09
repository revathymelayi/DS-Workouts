
     

   

function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = i+1; j < arr.length; j++)
        {
        if (arr[i] === arr[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr.sort();
  }
  

const arr = [1, 2, 3, 2, 1, 4, 5, 4];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]