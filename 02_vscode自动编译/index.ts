/*
 * @Date: 2021-09-22 14:14:53
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-22 14:26:46
 * @FilePath: \TS\02_vscode自动编译\index.ts
 */
(()=>{
    function hello (name:string){
        return `你好！${name}`
    }
    let a="muftea"
    console.log(hello(a))

})()

// 1.生成配置文件tsconfig.json
//      tsc --init
// 2.修改tsconfig.json的配置
//      "outDir":"./js",  编译完成后的js文件输出位置
//      "strict":false    关闭严格模式
// 3. 启动监视任务
//      终端 -> 运行任务 -> 监视tsconfig.json