/*
 * @Date: 2021-09-24 11:25:11
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:33:30
 * @FilePath: \ts\03_webpack_ts\04_函数\04_函数重载.ts
 */
//函数重载：函数名字相同，函数的参数及个数不同
(() => {
  //定义一个函数
  //我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

  //函数重载声明
  function add(x: string, y: string): string;
  function add(x: number, y: number): number;

  //定义函数实现
  function add(x: string | number, y: string | number): string | number {
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y;
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
    }
  }

  console.log(add(1, 2));
  console.log(add('1', '2'));
  // console.log(add(1, '2'))//error
})();
