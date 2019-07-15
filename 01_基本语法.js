/**
 * 1、只声明没有初始化的变量，值是 undefined，表示 "无定义"
 * */
console.log('==========================1、分割线=========================');
let a1;
console.log(`a1 = ${a1}`); // 输出：a1 = undefined



/**
* 2、变量提升：所有通过var声明的变量，都会被提升到代码到头部
* */
console.log('==========================2、分割线=========================');

// 会变量提升，这种写法等同于下面的写法
console.log(`b2 = ${b2}`);  // 不会报错，输出：b2 = undefined
var b2 = 1;

// 这种写法和上面写法效果一样
var c2;
console.log(`c2 = ${c2}`);  // 不会报错，输出：c2 = undefined
c2 = 1;

// let声明变量不会变量提升（建议都使用let）
// console.log(`a2 = ${a2}`); // 会报错：ReferenceError: a2 is not defined
// let a2 = 1;



/**
 * 3、区块：使用打括号{}包裹的代码块成为'区块'
 * 注意：对于var命令，区块并不会构成单独的作用域
 * */
console.log('==========================3、分割线=========================');
{
    var a3 = 3;
}
console.log(`a3 = ${a3}`);  // 输出：a3 = 3

// 区块会对let声明的变量构成单独的作用域
// {
//     let b3 = 3;
// }
// console.log(`b3 = ${b3}`);  // 会报错：ReferenceError: b3 is not defined



/**
 * 4、switch...case...采用的是严格相等运算符（===），不会自动类型转换
 * */
console.log('==========================4、分割线=========================');
let a4 = 1;
switch (a4) {
    case true:
        console.log('true');    // 1和true不是严格相等，不会执行这里
        break;
    default:
        console.log('false');
        break;
}



/**
 * 5、标签：标签可以是除了保留字以外的任何标识符，通常配合continue和break使用，跳出指定的循环
 * */
console.log('==========================5、分割线=========================');

// 跳出指定循环
top:
    for (let i5 = 0; i5 < 3; i5++) {
        for (let j5 = 0; j5 < 3; j5++) {
            if (i5 === 1 && j5 === 1) {
                break top;  // 可以直接跳出双层循环
            }
            console.log(`i5 = ${i5}, j5 = ${j5}`);
        }
    }
    console.log('双层循环执行结束');

// 跳出代码块
foo: {
    console.log('输出第一行');
    break foo;  // 跳出代码块
    console.log('这一行不会输出');
}

