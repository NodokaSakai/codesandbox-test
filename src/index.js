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
// const nameArr = ["山田", "田中", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`); // 山田 田中 佐藤
// }

// map => 配列に対して使える関数
// // returnされた結果に基づいて新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2); ["山田", "田中", "佐藤"]

// 配列をループさせて処理
// nameArr.map((name) => console.log(name));

//番号を意識 (２つ目の引数indexには0始まりの通し番号が入る)
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter => ある条件に一致するものだけを選別して新しい配列を作成
// const numArr = [1, 2, 3, 4, 5];
// const numNumArr = numArr.filter((num) => {
//   return num % 2 == 1;
// });
// console.log(numNumArr);

// "佐藤"以外には"さん"をつけて出力したい
// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// 入力が数値の時は金額表示, それ以外は"数値を入力してください"と出力
// const num = "1300";
// // typeof A = Aの型を出力
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// 2つの整数の合計に応じてそれが範囲内か外かを判断する関数
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}
if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

// ||左側がfalseなら右側を返す
const num = "";
const fee = num || "金額は未設定です";
console.log(fee);

// && 左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
