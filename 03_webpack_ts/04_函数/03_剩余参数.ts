/*
 * @Date: 2021-09-24 11:14:56
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:33:28
 * @FilePath: \ts\03_webpack_ts\04_函数\03_剩余参数.ts
 */
//剩余参数(rest参数)
//剩余参数是放在函数声明的时候所有的参数的最后
(() => {
  function showMsg(str: string, ...args: Array<string>) {
    console.log(str); //a
    console.log(args); //[b,c,d,e]
  }
  showMsg('a', 'b', 'c', 'd', 'e');
})();
