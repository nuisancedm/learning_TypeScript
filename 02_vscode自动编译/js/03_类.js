/*
 * @Date: 2021-09-22 14:50:01
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-22 16:35:52
 * @FilePath: \TS\02_vscode自动编译\03_类.ts
 */
//ts中书写js中的类
(function () {
    //定义一个类型
    var Person = /** @class */ (function () {
        //定义构造器函数
        function Person(firstName, lastName) {
            //更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            //更新全名
            this.fullName = this.firstName + "_" + this.lastName;
        }
        return Person;
    }());
    //定义全名函数
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    //实例化对象
    var person = new Person("林", "有德");
    console.log(showFullName(person));
})();
