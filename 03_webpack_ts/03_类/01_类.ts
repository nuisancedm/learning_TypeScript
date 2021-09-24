/*
 * @Date: 2021-09-23 13:05:06
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:30:37
 * @FilePath: \ts\03_webpack_ts\03_类\01_类.ts
 */
//类可以理解为模板，通过模板可以实例化对象
//面向对象的变成思想
(() => {
  //ts中类的定义及使用
  class Person {
    name: string;
    age: number;
    gender: string;
    //定义构造函数：为了将来实例化对象的时候，可以直接对属性进行初始化
    constructor(name: string, age: number, gender: string) {
      //更新对象中的属性数据
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    //也可以定义实例方法
    sayHi(str: string) {
      console.log(
        `你好，我是${this.name}，我是${this.gender}的，今年${this.age}岁,${str}`
      );
    }
  }

  const sanZ = new Person('张三', 23, '男');
  console.log(sanZ.sayHi('你叫什么名字'));
})();
