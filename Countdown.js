function countKCountdown(arr) {
  let flag = -1;
  let count = 0;

  let mainArr = [];
  let countArr = [];
  let intialArr = [];

  for (let i = 0; i < arr.length; i++) {
    intialArr.push(arr[i]);

    if (arr[i] == 1) {
      flag = 1;

      //nested loop
      intialArr.sort();
      let secuanceArr = [];
      for (var num = 0; num < intialArr.length; num++) {
        while (intialArr[num + 1] !== undefined) {
          if (intialArr[num] < intialArr[num + 1]) {
            secuanceArr.push(intialArr[num]);
          } else {
            // secuanceArr = [];
          }
          num++;
        }
      }
      countArr.push(secuanceArr.reverse());

      intialArr = [];
    }

    if (arr[i] == flag) {
      flag--;
    } else flag = -1;

    if (flag == 0) {
      // console.log(flag);
      count++;
    }
  }

  // returning the count of
  mainArr.push(count);
  mainArr.push(countArr);
  console.log(mainArr);
}

// let arr = [4, 8, 3, 2, 1, 2];
let arr = [4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1];
// let arr = [4, 3, 2, 1, 3, 2, 1, 1];
// let arr = [1, 1, 2, 1];
// let arr = [];
// Function Call
countKCountdown(arr);
