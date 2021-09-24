/*
 * @Date: 2021-09-24 13:06:46
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 13:37:03
 * @FilePath: \ts\03_webpack_ts\src\01_泛型.ts
 */
//泛型：在定义函数或者接口或者类的时候，不能预先确定要使用的数据的类型，而是在使用的时候才能确定数据的类型
(() => {
    //需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量
    //函数的作用，根据数量产生对应个数的数据，存放在一个数组中
    // function getArr(value: number, count: number): Array<number> {
    //     //根据数据和数量产生一个数组
    //     const arr: number[] = [];
    //     for (let i = 0; i < count; i++) {
    //         arr.push(value)
    //     }

    //     return arr
    // }

    // const arr1 = getArr(100.123, 3)
    // console.log(arr1)

    // //定义一个函数同上，只不过传入的是字符串类型
    // function getaArr2(value: string, count: number): Array<string> {
    //     //根据数据和数量产生一个数组
    //     const arr: string[] = [];
    //     for (let i = 0; i < count; i++) {
    //         arr.push(value)
    //     }

    //     return arr
    // }

    // const arr2 = getArr2('100.123', 3)
    // console.log(arr2)

    //可以传入任何类型的数据，返回的都是存储这个类型的数据的数组
    //使用any类型
    // function getArr3(value: any, count: number): Array<any> {
    //     //根据数据和数量产生一个数组
    //     const arr: any[] = [];
    //     for (let i = 0; i < count; i++) {
    //         arr.push(value)
    //     }

    //     return arr
    // }

    // const arr3 = getArr3('100.123', 3)
    // const aaa = arr3[0].spilt('')//因为是any类型的数组，所以没有任何的代码提示
    // console.log(arr3)

    //使用泛型
    //定义函数 在函数名后加<T> 可以认为是类型的一个形参，在调用的时候给如实参
    function getArr3<T>(value: T, count: number): Array<T> {
        //根据数据和数量产生一个数组
        const arr: T[] = [];
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }

        return arr
    }
    const arr3 = getArr3<string>('100.123', 3)
    const aaa = arr3[0].split('')//因为是any类型的数组，所以没有任何的代码提示
    console.log(aaa)

    const arr4 = getArr3<number>(100, 3)
    const bbb = arr4[0].toFixed(2)
    console.log(bbb)



})()