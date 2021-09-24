/*
 * @Date: 2021-09-23 14:33:47
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 10:38:11
 * @FilePath: \ts\03_webpack_ts\src\05_readonly修饰符.ts
 */
//readonly是一个关键字，对类中的属性成员进行修饰
//该属性成员被修饰后就不能在外部被随意的修改了
//*构造函数中，可以对只读的属性成员的数据进行修改
//如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了
//那么外部也是不能对这个属性值进行修改的
(()=>{
    //定义一个类
    class Person {
        readonly name:string
        constructor(name:string){
            //只有在constructor中可以初始化name的值
            this.name=name
        }

        sayHi(){
            console.log('你好！', this.name)
        }
    }

    const person:Person=new Person('张三')
    // person.name='李四！'
    console.log(person)
    console.log(person.name)
})()