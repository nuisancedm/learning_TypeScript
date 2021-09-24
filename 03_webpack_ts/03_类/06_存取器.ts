/*
 * @Date: 2021-09-24 09:31:45
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:33:09
 * @FilePath: \ts\03_webpack_ts\03_类\06_存取器.ts
 */
//存取器让我们可以有效的控制对对象成员的额访问，通过getters和setters来进行操作
(() => {
  //外部可以传入姓氏和名字数据，同时可以使用set和get控制姓名的数据，外部也可以进行修改操作
  class Person {
    firstname: string;
    lastname: string;
    age: number;
    //姓名成员属性（外部可以访问，也可以修改）
    constructor(firstname: string, lastname: string) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    //读取器-----负责读取数据的
    get fullname() {
      return this.firstname + '_' + this.lastname;
    }
    //设置器-----负责修改数据的
    set fullname(value) {
      const name = value.split('_');
      this.firstname = name[0];
      this.lastname = name[1];
    }
  }

  const person: Person = new Person('李', '阿宝');
  console.log(person);
  //获取该属性的数据
  console.log(person.fullname); //李阿宝
  console.log('==============================');
  //修改该属性的数据
  person.fullname = '林_有德';
  console.log(person);
  console.log(person.fullname); //林有德

  //测试
  console.log(person.firstname);
  person.firstname = '王';
  console.log(person.firstname);
  console.log(person.fullname);
})();
