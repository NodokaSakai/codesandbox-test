/**
 * デフォルト値, 引数
 */
// //引数が空だった場合のデフォルト値を"ゲスト"に設定(分割代入の場合も同じような設定が可能)
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文　...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(arr3); // [3, 4, 5]

// // 配列のコピー, 結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); // [10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //[10, 20, 30, 40]

// // 配列をコピーするだけなら = で結べばいいのでは？
// const arr8 = arr4;
// console.log(arr8); // [10, 20]

// arr8[0] = 100;
// console.log(arr8); // [100, 20]
// console.log(arr4); // [100, 20] ← 元の関数まで影響を受けてしまうから✖️

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["山田", "田中", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]); // 山田 田中 佐藤
// }

// map => 配列に対して使える関数
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2); //["山田", "田中", "佐藤"]
