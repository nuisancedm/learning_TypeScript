/*
 * @Date: 2021-09-22 16:36:56
 * @Editors: Mazhihui-Niko
 * @LastEditTime: 2021-09-24 16:30:09
 * @FilePath: \ts\03_webpack_ts\01_TS中的基础数据类型\01_基础类型.ts
 */
//基础类型
(() => {
  //let 变量名 : 数据类型 = 值

  //布尔类型  =====> boolean
  let flag: boolean = true;
  console.log(flag); //true

  //数字类型  =====> number
  let a1: number = 10; // 十进制
  let a2: number = 0b1010; // 二进制
  let a3: number = 0o12; // 八进制
  let a4: number = 0xa; // 十六进制
  console.log(a1, a2, a3, a4); //10,10,10,10 炸弹！

  //字符串类型  =====> string
  let str1: string = '床前明月光';
  let str2: string = '疑似地上霜';
  let str3: string = '举头望明月';
  let str4: string = '低头思故乡';
  console.log(`${str1},${str2},${str3},${str4},`);
  //字符串和数字之间可以拼接结果为字符串
  let str5: string = '我有这么多的钱';
  let num: number = 1000;
  console.log(str5 + num);

  //ts中一开始规定了是什么类型，后期赋值的时候，就只能用这个类型的数据
  //变量赋值要讲武德，说好是什么类型，就是什么类型

  //undefined和null类型  =====>undefined & null
  let und: undefined = undefined;
  let nll: null = null;
  console.log(und, nll);
  //undefined和null都可以作为其他类型的子类型，可以把undefined和null赋值给其他类型的变量
  // let num2: number = undefined
  let num2: number = null;
  console.log(num2);

  console.log('---------------------分割线---------------------');

  //数组类型
  //数组定义方式1 let 变量名:number[]=
  let arr1: number[] = [10, 20, 30, 40, 50]; //let 变量名：数据类型[]=[值]
  //数组定义方式2 let 变量名:Array<类型>=
  let arr2: Array<number> = [1, 2, 3, 4, 5]; //let 变量名：Array<数据类型>=[值]
  console.log(arr1, arr2);

  //元组类型
  //元组类型在定义数组的时候，类型和数据的个数从一开就已经被限定了
  let arr3: [string, number, boolean] = ['李阿宝', 23, true];
  console.log(arr3);
  //元组类型在使用的时候，数据的类型的位置和数据的个数，应该和在定义元组的时候的数据类型和位置是一样的
  console.log(arr3[0].split('')); //['李', '阿', '宝']
  console.log(arr3[1].toFixed(2)); //23.00

  console.log('---------------------分割线---------------------');

  //枚举类型
  //枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号从0开始，依次递增
  enum Color {
    red = 1,
    green,
    blue,
  }
  //定义一个Color的枚举类型的变量来接收枚举的值 枚举中的元素可以是中文，但是不推荐(-_-、)
  let color: Color = Color.red;
  console.log(color);
  console.log(Color.red, Color.green, Color.blue);
  console.log(Color[3]);

  console.log('---------------------分割线---------------------');

  //any类型 任何类型
  let str: any = 100;
  // str='我爸爸都没打过我'
  console.log(str);
  //当一个数组中药存储多个数据，且个数不确定,类型不确定，此时也可以使用any类型数组
  let arr: any[] = [100, '年少不知软饭香，错把青春倒插秧', false];
  console.log(arr);
  //因为使用了any类型，这种情况下ts就不会提供错误提示信息,编译会通过，控制台报错
  // console.log(arr[0].split('')) //报错

  //void类型,在函数声明的时候，小括号的后面使用void，仅能够提示程序员该函数没有任何返回值
  function showmsg(): void {
    console.log('人类总是重复同样的错误');
  }
  //定义void类型的变量，可以接收一个undefined值，你定义了，ts执行了，但是这有意义吗？
  let vd: void = undefined;
  console.log(vd);

  console.log('---------------------分割线---------------------');

  //object 类型 和JS里对象数据类型差不多
  //定义一个函数，参数是object 返回值也是object
  function getObj(obj: object) {
    console.log(obj);
    return {
      name: '法外狂徒张三',
      age: '30',
    };
  }
  console.log(getObj({ name: '成步堂龙一', age: 20 })); //

  let obj1: object = { name: 'aka', age: '23' }; //对象肯定是对象
  console.log(obj1);

  let obj2: object = new String('123'); //string对象也是对象,同理其他类型对象也都是对象
  console.log(obj2);

  console.log('---------------------分割线---------------------');

  //联合类型 =====>UnionType
  //联合类型表示取值可以为多种类型中的一种
  //需求1：定义一个函数得到一个数字或者字符串类型的值
  // function getString(str:string|number):string{
  //     return str.toString()
  // }
  // console.log(getString(123)) //"123"
  // // console.log(getString(true)) //报错！

  //类型断言
  //需求2：定义一个一个函数得到一个数字或者字符串值的长度
  //类型断言：告诉编译器，我知道我自己是什么类型，我也知道自己在干什么，我有逼数
  //类型断言语法方式1：(<string>str)
  //类型断言的语法方式2:(str as string)
  function getString(str: string | number): number {
    if ((<string>str).length) {
      return (<string>str).length;
    } else {
      return (str as number).toString().length;
    }
  }
  console.log(getString(123)); //3
  console.log(getString('0123456')); //7

  //类型推断
  let txt = 100; //如果没有给一个变量类型限制，ts会自动推断出这个变量的值的类型并加以限制
  console.log(txt);
  // txt='嘉心糖' //报错！
  let txt2; //如果一个变量声明了没给值也没限制，ts会推断他为any类型的变量
  console.log(txt2);
})();
