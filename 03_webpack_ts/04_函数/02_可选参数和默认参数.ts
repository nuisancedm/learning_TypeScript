/*
 * @Date: 2021-09-24 11:06:13
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 11:14:01
 * @FilePath: \ts\03_webpack_ts\src\02_可选参数和默认参数.ts
 */
//默认参数，函数在声明的时候内部的参数有自己的默认值
//可选参数，函数在声明的时候内部的参数使用了？进行修饰，表示该参数可传可不传

(() => {
    //传入姓氏和名字，可以得到姓名
    //如果不传入任何内容，就返回默认的姓氏
    //如果只传入姓氏，就返回姓氏
    //如果传入姓氏和名字，就返回全名
    const getFullName = function (firstname: string = '李', lastname?: string) {
        if (lastname) {
            return firstname + '_' + lastname
        } else {
            return firstname
        }
    }

    //调用
    let res = getFullName('林','有德')

    console.log(res)
})()