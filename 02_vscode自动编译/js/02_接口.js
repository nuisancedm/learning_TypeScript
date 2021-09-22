/*
 * @Date: 2021-09-22 14:37:31
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-22 14:48:48
 * @FilePath: \TS\02_vscode自动编译\02_接口.ts
 */
//接口：是一种能力，一种约束而已
(function () {
    //规定输出姓名函数 并规定person为Iperson形式的参数
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    ;
    //随便定义一个对象
    var amuro = {
        firstName: "李",
        lastName: "阿宝",
        midname: "林" //比接口多也没事，少就不行
    };
    console.log(showFullName(amuro));
})();
