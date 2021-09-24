/*
 * @Date: 2021-09-24 13:47:48
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:33:51
 * @FilePath: \ts\03_webpack_ts\src\02_多个泛型参数的函数.ts
 */
//函数中有多个泛型的参数
(() => {
  function getMsg<K, V>(value1: K, value2: V): [K, V] {
    return [value1, value2];
  }
  const arr1 = getMsg<string, number>('jack', 23);
  let res1 = arr1[0].split('');
  let res2 = arr1[1].toFixed(1);
  console.log(res1);
  console.log(res2);

  //练习
  function getMsg2<K, V>(val1: K, val2: V): [K, V] {
    return [val1, val2];
  }
  let arr = getMsg2<number, string>(3, 'asd');
  console.log(arr);
})();
