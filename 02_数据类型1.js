/**
 * 1、JavaScript的数据类型有：
 *      number：包括整数和小数
 *      string：字符串
 *      boolean：false、true
 *      undefined：表示未定义/不存在
 *      null：表示空值
 *      object：对象，又可以细分为：狭义的对象（object）、数组（array）、函数（func）
 *
 * 有三个方法可以确定某个值是什么类型：typeof运算符、instanceof运算符、Object.prototype.toString函数
 * */
console.log('==========================1、分割线=========================');
console.log(`123 = ${typeof 123}`);         // 123 = number
console.log(`NaN = ${typeof NaN}`);         // NaN = number
console.log(`\'123\' = ${typeof '123'}`);   // '123' = string
console.log(`false = ${typeof false}`);     // false = boolean
console.log(`null = ${typeof null}`);       // null = object
console.log(`[] = ${typeof []}`);           // [] = object
console.log(`{} = ${typeof {}}`);           // {} = object
console.log(`undefined = ${typeof undefined}`);  // undefined = undefined

function f() {

}
console.log(`f = ${typeof f}`);             // f = function



/**
 * 2、null和undefined，两者非常相似，在if语句中，两者都被当作false，甚至非严格相等运算符两者是相等的
 * */
console.log('==========================2、分割线=========================');
console.log(`null == undefined：${null == undefined}`);      // null == undefined：true
console.log(`null === undefined：${null === undefined}`);    // null === undefined：false

// null 表示'无'，转为数值时为0
console.log(`Number(null) = ${Number(null)}`);      // Number(null) = 0
console.log(`5 + null = ${5 + null}`);                    // 5 + null = 5

// undefined 表示'无定义'，转为数值时为NaN
console.log(`Number(undefined) = ${Number(undefined)}`);    // Number(undefined) = NaN
console.log(`5 + undefined = ${5 + undefined}`);                  // 5 + undefined = NaN

// 另外，若函数没有返回值，默认返回undefined
function f2() {}
console.log(`f2 = ${f2()}`);    // f2 = undefined



/**
 * 3、布尔值：下面六种值会被转换为false，其它值都视为true
 *          undefined、null、0、NaN、false、''或""（空字符串）
 * */



/**
 * 4、数值
 * */
console.log('==========================4、分割线=========================');
// 在JavaScript中，所有数字都以64位浮点数存储，即便整数也是。所以，1与1.0是严格相等的
console.log(`1 === 1.0：${1 === 1.0}`);      // 1 === 1.0：true

// 浮点数的计算不是完全精确，所以涉及到小数的计算要非常小心
console.log(`0.1 + 0.2 === 0.3：${0.1 + 0.2 === 0.3}`);              // 0.1 + 0.2 === 0.3：false
console.log(`0.3 / 0.1 = ${0.3 / 0.1}`);                             // 0.3 / 0.1 = 2.9999999999999996
console.log(`0.3 - 0.2 === 0.2 - 0.1：${0.3 - 0.2 === 0.2 - 0.1}`);  // 0.3 - 0.2 === 0.2 - 0.1：false

// 最大值/最小值
console.log(`Number.MAX_VALUE = ${Number.MAX_VALUE}`);      // Number.MAX_VALUE = 1.7976931348623157e+308
console.log(`Number.MIN_VALUE = ${Number.MIN_VALUE}`);      // Number.MIN_VALUE = 5e-324



/**
 * 5、进制相关：
 *      十进制：没有前导0的数值
 *      八进制：有前缀0o或0O的数值，或者有前导0并且只用到0～7的数值
 *      十六进制：有前缀0x或0X的数值
 *      二进制：有前缀0b或0B的数值
 * */
console.log('==========================5、分割线=========================');
console.log(`0888 = ${0888}`);  // 0888 = 888
// 被自动转为8进制。ES5的严格模式和ES6已经废除了这种写法
console.log(`0777 = ${0777}`);  // 0777 = 511



/**
 * 6、NaN：表示'非数字'（Not a Number），主要出现在将字符串转换为数字出错的场合
 * */
console.log('==========================6、分割线=========================');
console.log(`5 - \'x\' = ${5 - 'x'}`);      // 5 - 'x' = NaN
console.log(`0 / 0 = ${0 / 0}`);            // 0 / 0 = NaN
console.log(`NaN === NaN：${NaN === NaN}`); // NaN === NaN：false
// NaN与任何数的运算结果都是NaN
console.log(`NaN + NaN = ${NaN + NaN}`);    // NaN + NaN = NaN
console.log(`NaN - NaN = ${NaN - NaN}`);    // NaN - NaN = NaN
console.log(`NaN + 32 = ${NaN + 32}`);      // NaN + 32 = NaN
console.log(`NaN / 2 = ${NaN / 2}`);        // NaN / 2 = NaN



/**
 * 7、Infinity：表示'无穷'（无穷大和无穷小两种）
 * */
console.log('==========================7、分割线=========================');
// JavaScript中有+0和-0，几乎所有场合两者都被当作0，唯一有区别的场合如下(所有非0的数除以0结果都是(+/-)Infinity)：
console.log(`1 / +0 = ${1 / +0}`);                       // 1 / +0 = Infinity
console.log(`1 / -0 = ${1 / -0}`);                       // 1 / -0 = -Infinity
console.log(`1 / +0 === 1 / -0：${1 / +0 === 1 / -0}`);  // 1 / +0 === 1 / -0：false

// Infinity大于除了NaN之外的所有数，-Infinity小于除了NaN之外的所有数
console.log(`Infinity < NaN：${Infinity < NaN}`);    // Infinity < NaN：false
console.log(`Infinity > NaN：${Infinity > NaN}`);    // Infinity > NaN：false
console.log(`-Infinity < NaN：${-Infinity < NaN}`);  // -Infinity < NaN：false
console.log(`-Infinity > NaN：${-Infinity > NaN}`);  // -Infinity > NaN：false

// 其它需要注意的Infinity相关的运算(在与Infinity运算时，null会自动转换为0，所以null与Infinity的运算结果与0完全相同)
console.log(`0 / Infinity = ${0 / Infinity}`);  // 0 / Infinity = 0
console.log(`Infinity / 0 = ${Infinity / 0}`);  // Infinity / 0 = Infinity
console.log(`0 * Infinity = ${0 * Infinity}`);  // 0 * Infinity = NaN
console.log(`Infinity - Infinity = ${Infinity - Infinity}`);    // Infinity - Infinity = NaN
console.log(`Infinity / Infinity = ${Infinity / Infinity}`);    // Infinity / Infinity = NaN
// 注意️：undefined 与 Infinity 所有计算结果都是 NaN



/**
 * 8、与数值相关的全局方法之 -- parseInt(str, num)
 *      str: 第一个参数为需要转为整型的字符串
 *      num: 第二个参数为转换时用的进制，2-36之间，默认为10，
 *           如果第二个参数不是数值，会被自动转为整数
 *           但如果第二个参数为0、null、undefined会自动被忽略掉
 * */
console.log('==========================8、分割线=========================');
// parseInt(x): 会先将参数转为字符串再转换为整数（哪怕参数为整数），如果字符串头部有空格，会自动去掉空格
//              如果参数首位不是数字(后面跟了数字的+/-号除外)，则直接返回NaN
console.log(`parseInt('abc') = ${parseInt('abc')}`);        // parseInt('abc') = NaN
console.log(`parseInt('+10abc') = ${parseInt('+10abc')}`);  // parseInt('+10abc') = 10
console.log(`parseInt('+') = ${parseInt('+')}`);            // parseInt('+') = NaN
console.log(`parseInt('') = ${parseInt('')}`);              // parseInt('') = NaN
console.log(`parseInt('   -10') = ${parseInt('   -10')}`);  // parseInt('   -10') = -10
console.log(`parseInt(null) = ${parseInt(null)}`);          // parseInt(null) = NaN
console.log(`parseInt(undefined) = ${parseInt(undefined)}`);// parseInt(undefined) = NaN
console.log(`parseInt(Infinity) = ${parseInt(Infinity)}`);     // parseInt(Infinity) = NaN

// 如果parseInt传入的字符串以0x/0b/0o开头，会转为对应进制的数字，以0开头默认转为10进制
console.log(`parseInt('0xa1vc') = ${parseInt('0xa1vc')}`);  // parseInt('0xa1vc') = 161
console.log(`parseInt('0777') = ${parseInt('0777')}`);      // parseInt('0777') = 777

// parseInt 并不支持科学计数法的字符串
console.log(`parseInt('1e+4') = ${parseInt('1e+4')}`);      // parseInt('1e+4') = 1
console.log(`parseInt('1e-8') = ${parseInt('1e-8')}`);      // parseInt('1e-8') = 1

// 如果 parseInt 第二个参数值不在2 - 36范围内，则返回NaN（0、null、undefined除外）
console.log(`parseInt('123', 37) = ${parseInt('123', 37)}`);    // parseInt('123', 37) = NaN
console.log(`parseInt('123', 1) = ${parseInt('123', 1)}`);      // parseInt('123', 1) = NaN
console.log(`parseInt('123', -2) = ${parseInt('123', -2)}`);    // parseInt('123', -2) = NaN

// 第二个参数不是数值，会自动转为整数
console.log(`parseInt('123', '8') = ${parseInt('123', '8')}`);      // parseInt('123', '8') = 83
console.log(`parseInt('123', '10.2') = ${parseInt('123', '10.2')}`);// parseInt('123', '10.2') = 123

// 进制数和字符串不匹配：从字符串首位开始，只匹配符合进制的数，遇到不匹配的结束。如果没有匹配的，则返回NaN
console.log(`parseInt('123', 2) = ${parseInt('123', 2)}`);  // parseInt('123', 2) = 1
console.log(`parseInt('234', 2) = ${parseInt('234', 2)}`);  // parseInt('234', 2) = NaN

// 切忌第一个参数传整数，否则会出现令人意外的结果
console.log(`parseInt(077) = ${parseInt(077)}`);                    // parseInt(077) = 63
// 等同于
console.log(`parseInt(String(077)) = ${parseInt(String(077))}`); // parseInt(String(077)) = 63
// 正确严谨的写法
console.log(`parseInt('077') = ${parseInt('077')}`);                // parseInt('077') = 77



/**
 * 9、与数值相关的全局方法之 -- parseFloat(str, num)
 * */
console.log('==========================9、分割线=========================');
// 与parseInt不同的是，parseFloat支持科学计数法的字符串
console.log(`parseFloat('3.14e+2') = ${parseFloat('3.14e+2')}`);    // parseFloat('3.14e+2') = 314
console.log(`parseFloat('3.14e-2') = ${parseFloat('3.14e-2')}`);    // parseFloat('3.14e-2') = 0.0314

// parseFloat不同于Number的转换
console.log(`parseFloat(true) = ${parseFloat(true)}`);              // parseFloat(true) = NaN
console.log(`Number(true) = ${Number(true)}`);                      // Number(true) = 1
console.log(`parseFloat(null) = ${parseFloat(null)}`);              // parseFloat(null) = NaN
console.log(`Number(null) = ${Number(null)}`);                      // Number(null) = 0
console.log(`parseFloat('') = ${parseFloat('')}`);                  // parseFloat('') = NaN
console.log(`Number('') = ${Number('')}`);                          // Number('') = 0
console.log(`parseFloat('123.456a') = ${parseFloat('123.456a')}`);  // parseFloat('123.456a') = 123.456
console.log(`Number('123.456a') = ${Number('123.456a')}`);          // Number('123.456a') = NaN



/**
 * 10、与数值相关的全局方法之 -- isNaN：用于判断一个值是否为NaN
 * */
console.log('==========================10、分割线=========================');
// isNaN只对数值有效，如果传入的参数非数值，会先通过Number()转为数值。
console.log(`isNaN(NaN) = ${isNaN(NaN)}`);                  // isNaN(NaN) = true
console.log(`isNaN(123) = ${isNaN(123)}`);          // isNaN(123) = false
console.log(`isNaN('123') = ${isNaN('123')}`);      // isNaN('123') = false
console.log(`isNaN('12ab') = ${isNaN('12ab')}`);    // isNaN('12ab') = true
console.log(`isNaN('abc') = ${isNaN('abc')}`);      // isNaN('abc') = true

// 出于同样的原因，对于大部分数组和对象，isNaN也返回true
console.log(`isNaN(['abc']) = ${isNaN(['abc'])}`);  // isNaN(['abc']) = true

console.log(`Number({}) = ${Number({})}`);            // Number({}) = NaN
console.log(`isNaN({}) = ${isNaN({})}`);            // isNaN({}) = true

// 对于空数组和只有一个数值成员的数组，isNaN返回false
console.log(`Number([]) = ${Number([])}`);            // Number([]) = 0
console.log(`isNaN([]) = ${isNaN([])}`);            // isNaN([]) = false
console.log(`isNaN([123]) = ${isNaN([123])}`);      // isNaN([123]) = false
console.log(`isNaN(['123']) = ${isNaN(['123'])}`);  // isNaN(['123']) = false

// 因此，在使用isNaN之前，最好做一下数据处理
function myIsNaN1(param) {
    return typeof param === 'number' && isNaN(param)
}
// 更可靠的方法：利用NaN是唯一不等于自身的值这一特点判断
function myIsNaN2(param) {
    return param !== param;
}

console.log(`myIsNaN1(NaN) = ${myIsNaN1(NaN)}`);            // myIsNaN1(NaN) = true
console.log(`myIsNaN1('abc') = ${myIsNaN1('abc')}`); // myIsNaN1('abc') = false
console.log(`myIsNaN2(NaN) = ${myIsNaN2(NaN)}`);            // myIsNaN2(NaN) = true
console.log(`myIsNaN2('abc') = ${myIsNaN2('abc')}`); // myIsNaN2('abc') = false



/**
 * 11、与数值相关的全局方法之 -- isFinite：判断某个值是否为正常的数值。
 *          如果传入的参数不是number，会自动通过Number()转为number
 * */
console.log('==========================11、分割线=========================');
console.log(`isFinite(Infinity) = ${isFinite(Infinity)}`);              // isFinite(Infinity) = false
console.log(`isFinite(-Infinity) = ${isFinite(-Infinity)}`);            // isFinite(-Infinity) = false
console.log(`isFinite(undefined) = ${isFinite(undefined)}`);    // isFinite(undefined) = false
console.log(`isFinite(NaN) = ${isFinite(NaN)}`);                        // isFinite(NaN) = false
console.log(`isFinite(null) = ${isFinite(null)}`);              // isFinite(null) = true
// isFinite对于其它数值，都返回true