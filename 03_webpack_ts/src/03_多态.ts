/*
 * @Date: 2021-09-23 13:31:50
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-23 14:05:59
 * @FilePath: \ts\03_webpack_ts\src\03_多态.ts
 */
//多态：父类型的引用只想了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    //定义一个父类
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        run(distance: number = 0) {
            console.log(`${this.name}跑了${distance}米这么远的距离`)
        }
    }
    //定义一个子类
    class Dog extends Animal {
        constructor(name: string) {
            //调用父类的构造函数，初始化子类的属性
            super(name)
        }
        run(distance: number = 5) {
            console.log(`${this.name}跑了${distance}米这么远的距离`)
        }
    }

    //定义另一个子类
    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 10) {
            console.log(`${this.name}跑了${distance}米这么远的距离`)
        }
    }

    //正常实例化
    const ani:Animal=new Animal('动物')
    const dog:Dog=new Dog('旺财')
    const pig:Pig=new Pig('刚烈')
    ani.run()
    dog.run()
    pig.run()

    console.log("<======================================================>")

    //使用父类的类型实例化子类的对象
    const dog1:Animal=new Dog('旺财')
    dog1.run()
    const pig1:Animal=new Pig('刚烈')
    pig1.run()
    
    console.log("<======================================================>")
    
    //该函数需要的参数是animal类型
    function showRun(ani:Animal){
        ani.run()
    }
    showRun(dog)
    showRun(pig)
})()
