/*
 * @Date: 2021-09-23 10:18:18
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-23 10:35:31
 * @FilePath: \ts\03_webpack_ts\src\01_接口.ts
 */
//TS的核心原则之一是对值所具有的结构进行类型检查，使用接口(interface)来定义对象的类型
//接口是对对象的状态(属性)和行为(函数)的抽象(描述) 是一种类型，规范，规则，约束，能力
(() => {
    //定义一个接口，改接口作为person对象的类型使用，限定或者是约束该对象中的属性数据
    interface Iperson {
        readonly id: number, //id是一个只读的数字类型
        name: string,
        age: number,
        sex?: string //sex是一个可选的string类型
    }
    //定义一个对象，该对象的类型就是我定义的这个接口Iperson
    const person: Iperson = {
        id: 1,
        name: '法外狂徒张三',
        age: 18,
        sex: 'male'
    }
    console.log(person)
})()