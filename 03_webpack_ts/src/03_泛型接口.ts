/*
 * @Date: 2021-09-24 13:58:01
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:33:53
 * @FilePath: \ts\03_webpack_ts\src\03_泛型接口.ts
 */
//泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
(() => {
  //需求：定义一个类，用来存储用户的相关信息(ID，名字，年龄)
  //通过一个类的实例对象调用相关的方法可以添加多个用户信息独享，调用getUserId可以根据ID获取某个指定的用户信息对象

  //定义一个泛型接口
  interface IbaseCRUD<T> {
    data: Array<T>;
    add: number;
    getUserId;
  }

  //丁一一一个用户信息的类
  class User {
    id?: number;
    name: string;
    age: number;
  }
  //定义一个类，可以针对用户的信息对象进行增加查询的操作
  class UserCRUD {
    data: Array<User> = [];
    // add(user: User)
    // getUserId(id: number)
  }
})();
