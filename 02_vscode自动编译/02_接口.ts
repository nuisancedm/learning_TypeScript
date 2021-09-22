/*
 * @Date: 2021-09-22 14:37:31
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-22 14:48:48
 * @FilePath: \TS\02_vscode自动编译\02_接口.ts
 */
//接口：是一种能力，一种约束而已
(()=>{
    //定义一个接口 编译时不会被编译进js 接口只在ts文件自己内部使用
    interface Iperson{
        firstName:string;// 姓氏
        lastName:string;//名字
    }
    //规定输出姓名函数 并规定person为Iperson形式的参数
    function showFullName(person:Iperson){
        return `${person.firstName}_${person.lastName}`
    };

    //随便定义一个对象
    const amuro={
        firstName:"李",
        lastName:"阿宝",
        midname:"林" //比接口多也没事，少就不行
    }

    console.log(showFullName(amuro))
})()