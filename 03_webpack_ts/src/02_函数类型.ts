/*
 * @Date: 2021-09-23 10:45:41
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-23 11:02:13
 * @FilePath: \ts\03_webpack_ts\src\02_函数类型.ts
 */
//函数类型：通过接口的方式作为函数的类型来使用
//为了使用接口表示函数的类型，我们需要给接口定义一个调用签名
//这个签名就像是一个只有参数列表和返回值类型的函数定义，参数列表里的每个参数都需要名字和类型
(()=>{
    //定义一个接口，用来作为某个函数的类型
    interface IsearchFunc{
        //定义一个调用签名
        (source:string,subString:string):boolean
    }

    //定义一个函数，这个函数的类型就是上面定义的接口
    //想要使用接口定义函数类型，只能使用完整的函数声明方式
    const searchString:IsearchFunc=function (source:string,subString:string):boolean{
        return source.search(subString)!=-1
    }

    //调用函数
    let str1="嘉心糖屁用没有"
    let str2="糖"
    console.log(searchString(str1,str2)) //true
})()
