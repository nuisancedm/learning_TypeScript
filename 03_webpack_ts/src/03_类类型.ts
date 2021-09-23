/*
 * @Date: 2021-09-23 11:05:46
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-23 11:18:32
 * @FilePath: \ts\03_webpack_ts\src\03_类类型.ts
 */
//类 类型：类的类型，可以通过接口来实现
(()=>{
    //定义一个接口
    interface IFly{
        //定义一个方法，该方法中没有任何的实现(方法中什么都没有)
        fly()
    }
    //定义一个类，这个类的类型就是上面定义的接口(也可以理解为IFly接口约束了这个person类)
    class Person implements IFly{
        //实现接口中的方法
        fly(){
            console.log('我会飞了')
        }
    }
    const person= new Person
    person.fly()


    //定义一个接口
    interface ISwim{
        swim()
    }
    //定义一个类, 这个类的类型就是IFly和ISwim（当前这个类可以被多个接口进行约束）
    class Person2 implements IFly,ISwim{
        fly(){console.log('i can fly!')}
        swim(){console.log('i can swim!')}
    }
    //对象实例化
    const person2=new Person2
    person2.fly()
    person2.swim()

    //总结：类可以通过接口的方式，来定义当前这个类的类型
    //类可以被多个接口约束，要注意接口中的内容都要真正的实现(得有大括号)

    //接口可以继承其他的多个接口
    interface IMyFlyAndSwim extends IFly,ISwim{}

    //定义一个类，直接实现IMyFlyAndSwim这个接口
    class Person3 implements IMyFlyAndSwim{
        fly(){console.log('i can fly3!')}
        swim(){console.log('i can swim3!')}
    }
    
    const person3=new Person3
    person3.fly()
    person3.swim()

    //总结：
    //接口和接口之间叫继承 使用extends关键字
    //类和接口之间叫实现 使用implements关键字
    
})()