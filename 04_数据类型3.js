/**
 * 1、对象：一组'键值对'的集合，是一种无序的复合数据集合
 * */
console.log('==========================1、分割线=========================');
// 对象中的键字符串可以不加引号
let a1 = {a:'aaa'};
let b1 = {'b': 'bbb'};
console.log(a1);        // { a: 'aaa' }
console.log(b1);        // { b: 'bbb' }

// 如果键名是数值，会自动转为字符串
let c1 = {1e2: true, 123: true, 0xff: true, 0.12: true};
console.log(`c1[1e2] = ${c1[1e2]}, c1['100'] = ${c1['100']}`);      // c1[1e2] = true, c1['100'] = true
console.log(`c1[0.12] = ${c1[0.12]}, c1['0.12'] = ${c1['0.12']}`);  // c1[0.12] = true, c1['0.12'] = true

// 对象的属性可以动态创建，不必在声明时就指定
let d1 = {};
d1.a = 'a';
d1.fun = function () {
    console.log('动态添加的d1.fun');
    return 'fun';
};
console.log(`d1.a  = ${d1.a}, d1.fun = ${d1.fun()}`);   // d1.a  = a, d1.fun = fun

// 如果不同的变量指向同一个对象，那么它们指向同一个内存地址，修改其中一个，会影响其它变量
let e1 = {};
let f1 = e1;
e1.a = 'aaa';
console.log(`f1.a = ${f1.a}`);      // f1.a = aaa
f1.b = 'bbb';
console.log(`e1.b = ${e1.b}`);      // e1.b = bbb

// 读取对象的属性，可以用点语法，也可以用中括号[]，但注意，用[]访问是，最好把对象的键加上引号（数值类型的键会自动加上引号）
// 对象属性赋值也是一样的规则

// 查看对象的所有键及删除对象的指定键值对
let obj1 = {key1: 1, key2: 2, key3: 3};
console.log(`Object.keys(obj1) = ${Object.keys(obj1)}`);            // Object.keys(obj1) = key1,key2,key3
let delStatus = delete  obj1.key2;
console.log(`obj1.key2 = ${obj1.key2}, delStatus = ${delStatus}`);  // obj1.key2 = undefined, delStatus = true

// 用in操作符判断某对象是否包含某个属性
console.log(`'key1' in obj1 = ${'key1' in obj1}`);                  // 'key1' in obj1 = true
console.log(`'toString' in obj1 = ${'toString' in obj1}`);          // 'toString' in obj1 = true

// 用hasOwnProperty判断是否为对象自身的属性
console.log(`obj1.hasOwnProperty('toString') = ${obj1.hasOwnProperty('toString')}`); // obj1.hasOwnProperty('toString') = false

// for...in...可以遍历对象的全部属性，会遍历出自身和继承来的所有可遍历(enumerable)的属性。
// 如果只希望遍历自身的属性，需要配合hasOwnProperty使用
for (let key in obj1) {
    // key = key1, value = 1
    // key = key3, value = 3
    console.log(`key = ${key}, value = ${obj1[key]}`);
}

// 对象的with语句，可以操作对象的多个属性
// 注意，with区块内的赋值操作，必须是对象已经有的属性；否则会自动创建一个当前作用域的全局变量
with (obj1) {
    key1 = 10;
    key2 = 20;
    key3 = 30;
}
console.log(obj1);              // { key1: 10, key3: 30 }
console.log(`key2 = ${key2}`);  // key2 = 20

with (obj1) {
    console.log(`obj1.key1 = ${key1}`); // obj1.key1 = 10，这里获取的是obj1的key1属性值
    console.log(key2);                  // 20  这里获取的是全局变量
    console.log(`obj1.key3 = ${key3}`); // obj1.key3 = 30，这里获取的是obj1的key3属性值
}






/**
 * 2、函数
 * */
console.log('==========================2、分割线=========================');
// 如果函数多次声明，则最后一次声明的会覆盖之前声明的。并且由于变量提升，之前声明的函数在任何时候都是无效的。
function func1() {
    console.log('a');
}
func1();            // b
function func1() {
    console.log('b');
}
func1();            // b

// 函数的name属性返回函数名
console.log(`func1.name = ${func1.name}`);  // func1.name = func1

let func2 = function(a) {};
console.log(`func2.name = ${func2.name}`);  // func2.name = func2

let func3 = function myFunction(a, b) {};
console.log(`func3.name = ${func3.name}`);  // func3.name = myFunction

// 函数的length属性返回函数定义时的参数个数
console.log(`func1.length = ${func1.length}`);  // func1.length = 0
console.log(`func2.length = ${func2.length}`);  // func2.length = 1
console.log(`func3.length = ${func3.length}`);  // func3.length = 2

// toString返回函数源码的字符串
console.log(`func2.toString = ${func2.toString()}`);  // func2.toString = function(a) {}
console.log(`func3.toString = ${func3.toString()}`);  // func3.toString = function myFunction(a, b) {}

// 函数参数值如果是原始类型的值（数值、布尔、字符串），传递方式为值传递，函数内修改不会影响函数外部的值
let p2 = 2;
function f2(p) {
    p = 3;
    console.log(`p = ${p}`);    // p = 3
}
f2(p2);
console.log(`p2 = ${p2}`);      // p2 = 2

// 如果参数是符合类型（数组、对象、其它函数），传递方式为传址传递，在函数内部修改会影响外部的值
let obj2 = {a: 1};
function f3(obj) {
    obj.a = 10;
}
f3(obj2);
console.log(`obj2.a = ${obj2.a}`);  // obj2.a = 10

// 如果函数有同名参数，则取最后出现的
function f4(a, a) {
    console.log(`a = ${a}`);
}
f4(10, 20);  // a = 20
f4(10);         // a = undefined

// 函数内部的arguments对象，包含了运行时函数内部的所有参数
function f5(a, b, ...rest) {
    // // 在严格模式下，修改arguments不会影响实参的值
    // 'use strict';
    // 函数内部的arguments对象，可以获取所有传递的参数
    console.log(arguments);     // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    // 函数内部的rest数组，可以获取多传的参数（若没有多余参数，为空数组）
    console.log(rest);          // [ 3, 4 ]
    arguments[0] = 10;
    arguments[1] = 20;
    return a + b;
}
let result1 = f5(1, 2, 3, 4)
console.log(`result1 = ${result1}`);    // result1 = 30(在严格模式下结果为3)






/**
 * 3、函数的闭包
 * */
console.log('==========================3、分割线=========================');
// 一般情况下，函数外部无法获取函数内的局部变量，但通过闭包可以实现
function fun1() {
    let m3 = 99;
    // fun2函数可以读取函数外的m3变量，这里的闭包就是fun2，可以读取fun1内的局部变量
    function fun2() {
        console.log(`m3 = ${m3}`);
    }
    return fun2;
}
let m4 = fun1();
m4();               // m3 = 99


// 下面的例子，闭包使内部变量记住上次调用的运行结果
function fun3(start) {
    return function () {
        return start++;
    }
}
let m5 = fun3(10);
console.log(`m5 = ${m5()}`);    // m5 = 10
console.log(`m5 = ${m5()}`);    // m5 = 11
console.log(`m5 = ${m5()}`);    // m5 = 12


// 闭包的另一个用途，封装对象的私有属性和私有方法
