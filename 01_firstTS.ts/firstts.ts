/*
 * @Date: 2021-09-16 10:55:01
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-22 14:08:40
 * @FilePath: \TS\firstTS.ts\firstts.ts
 */
(() => {
    function sayHi(str:string) {
        return `love you ${str}`
    }
    let name = "from mufti"
    console.log(sayHi(name))
})()

//手动编译
//ts文件中如果直接书写js语法的代码，那么html文件中直接引入ts文件，那么谷歌浏览器是可以直接使用的
//如果ts文件中有个ts的语法代码，那么就需要把ts文件编译成js代码引入 //终端里输入tsc ./firstts.ts
//ts文件中的函数中的形参，如果使用了某个类型进行修饰，那么最终在js文件中是没有这个类型的
//ts文件中用let声明，编译后js的声明就变成了var