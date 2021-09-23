/*
 * @Date: 2021-09-23 14:06:36
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-23 14:22:27
 * @FilePath: \ts\03_webpack_ts\src\04_修饰符.ts
 */
//修饰符(类中的成员的修饰符)：主要是描述类中的成员(属性，构造函数，方法)的可访问性
//类中国的成员都有自己默认的访问修饰符 默认是public
//public是类中成员默认的修饰符，代表的是公共的任何位置都可以访问
//private 类中的成员如果使用private来修饰，那么外部是无法访问这个成员数据的，子类中也不行
//protected 类中成员如果使用了protected，子类中可以访问，外部依然不行
(() => {
    //定义一个类
    class Person {
        // protected name: string
        public name: string
        // private name: string
        public constructor(name: string) {
            this.name = name
        }
        public eat() {
            console.log('好吃！', this.name) //name可以在内部被访问到
        }
    }

    //定义另一个类
    class Student extends Person{
        constructor(name:string){
            super(name)
        }
        play(){
            console.log('就是玩~',this.name) //报错 拿不到，子类中也拿不到父类的私有属性
        }
    }

    const per = new Person('阿福')
    console.log(per.name) //public name也可以在外面被拿到
})()