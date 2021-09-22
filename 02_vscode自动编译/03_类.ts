/*
 * @Date: 2021-09-22 14:50:01
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-22 16:35:52
 * @FilePath: \TS\02_vscode自动编译\03_类.ts
 */
//ts中书写js中的类
(() => {
    //定义一个接口
    interface Iperson {
        firstName: string  //姓氏
        lastName: string   //名字
    }
    //定义一个类型
    class Person {
        //定义公共的字段(属性)
        firstName: string //姓氏
        lastName: string  //名字
        fullName: string   //全名
        //定义构造器函数
        constructor (firstName:string,lastName:string){
            //更新属性数据
            this.firstName=firstName;
            this.lastName=lastName;
            //更新全名
            this.fullName=`${this.firstName}_${this.lastName}`
        }
    }
    //定义全名函数
    function showFullName(person:Iperson){
        return person.firstName+"_"+person.lastName
    }
    
    //实例化对象
    const person=new Person("林","有德")
    
    console.log(showFullName(person))
})()