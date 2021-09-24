/*
 * @Date: 2021-09-24 10:15:47
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 10:34:56
 * @FilePath: \ts\03_webpack_ts\src\08_抽象类.ts
 */
//抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现）,也可以包含实例方法
//抽象类不能被实例化，他是为了让子类实例化以及实现内部的抽象方法
(()=>{
    //定义一个抽象类
    abstract class Animal{
        //定义一个抽象方法，抽象方法不能有具体的行为
        abstract eat()
        //实例方法,所有继承的子类都可以调用这个方法
        sayHi(){
            console.log('你好')
        }
    }

    class Dog extends Animal {
        //对抽象类抽象方法的具体实现
        eat(){
            console.log('跪舔')
        }
    }

    //实例化dog对象
    const dog=new Dog()
    dog.eat()   //
    dog.sayHi() //可以调用抽象父类的实例方法
})()