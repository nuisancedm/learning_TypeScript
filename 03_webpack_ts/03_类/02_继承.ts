/*
 * @Date: 2021-09-23 13:19:24
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 09:10:26
 * @FilePath: \ts\03_webpack_ts\src\02_继承.ts
 */
//类与类之间的关系
//继承后类与类之间的叫法
//A类继承了B这个类，那么A叫B的子类，B叫基类
//子类======>派生类
//基类======>超类(父类)
//一旦发生了继承的关系，就出现了父子类的关系
//子类中可以使用super.关键字来调用父类里的方法
(()=>{
    //定义一个类
    class Person {
        //定义属性
        name:string
        age:number
        gender:string
        //定义构造函数
        constructor(name:string,age:number,gender:string){
            this.name=name;
            this.age=age;
            this.gender=gender
        }
        //定义方法
        sayHi(str:string){
            console.log(`我是${this.name},${str}?`)
        }
    }

    //定义一个类，继承自person，使用extends关键字
    class Student extends Person{
        constructor(name:string,age:number,gender:string){
            //此处super为函数用法：super调用等于父类中的构造函数
            super(name,age,gender)
        }

        //可以调用父类中的方法
        sayHi(){
            console.log('我是学生类中的sayHi方法')
            //此处super为对象用法：在普通方法中，指向父类的原型对象；在静态方法中，指向父类
            super.sayHi('haha')
        }
    }

    //实例化person
    const person=new Person('张三',18,'男')

    //实例化student
    const student =new Student('李四',16,'女')
    student.sayHi() //我是李四，haha

    //总结：类和类之间如果要有继承关系，需要使用extends关键字
    //子类中可以调用父类中的构造函数，使用的是super关键字，包括方法
    //子类中可以重写父类的方法
})()