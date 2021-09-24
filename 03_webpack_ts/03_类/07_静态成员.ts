/*
 * @Date: 2021-09-24 09:56:23
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 10:07:27
 * @FilePath: \ts\03_webpack_ts\src\07_静态成员.ts
 */
//静态成员：在类中通过static修饰的属性或者方法，那么就是静态属性或者静态方法，也称之为静态成员
//静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
    //定义一个类
    class Person {
        static name1: string = "张三"
        constructor() {
            //此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性
            // this.name1 = name
        }
        static sayHi() {
            console.log('wdnmd')
        }
    }
    //实例化对象
    const person = new Person()
    //通过实例对象调用的属性和方法
    // console.log(person.name1)
    // person.sayHi()

    //通过类名.静态属性的方式来访问该成员数据
    console.log(Person.name1)
    Person.name1 = 'nicolas' //也可以修改
    console.log(Person.name1)

    Person.sayHi()
})()