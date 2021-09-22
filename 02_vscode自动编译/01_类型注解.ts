/*
 * @Date: 2021-09-22 14:29:03
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-22 17:45:55
 * @FilePath: \TS\02_vscode自动编译\01_类型注解.ts
 */
// 类型注解：是一种轻量级的为函数或者变量添加约束
//ts提供了静态的代码分析，他可以分析代码的结构和提供的类型注解，并主动提示错误信息

(() => {
    function showmsg(str: string) {
        return `床前明月光1，${str}`
    }
    let msg = "疑是地上霜";
    // let msg={10,20,30}; //直接报错，规定了str的形参为string，就只能传入string
    console.log(showmsg(msg))
}
)()