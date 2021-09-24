/*
 * @Date: 2021-09-24 10:39:21
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:33:24
 * @FilePath: \ts\03_webpack_ts\04_函数\01_函数.ts
 */
(() => {
  //ts里完全支持js中的函数写法

  //函数中x和y都是string 并且返回值也是string
  function add(x: string, y: string): string {
    return x + y;
  }
  console.log(add('111', '222'));
  const add2 = function (x: number, y: number): number {
    return x + y;
  };
  console.log(add2(111, 222));

  //函数的真正完整写法 ???正常人会这样写吗？
  //:(x:number,y:number)=>number相当于当前函数的类型
  //(x:number,y:number):number 相当于规定函数的参数类型和函数的返回值类型
  const add3: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
  let res: number = add3(1, 1);
  console.log(res); //2
})();
