/**
 * 1、字符串相关
 * */
console.log('==========================1、分割线=========================');
// 单引号内可以直接使用双引号；双引号内也可以直接使用单引号
let a1 = '"Hello"';
let b1 = "'world'";
console.log(`a1 = ${a1}, b1 = ${b1}`);      // a1 = "Hello", b1 = 'world'

// 如果单引号内要使用单引号（或双引号内要使用双引号），需要配合转译字符'\'使用
let c1 = '\'Hello\'';
console.log(`c1 = ${c1}`);                  // c1 = 'Hello'

// 多行字符串，但是输出还是单行
let d1 = 'Long \
long \
long \
string';
console.log(`d1 = ${d1}`);                  // d1 = Long long long string

// 可以通过下标获取指定位置的字符。如果下标越界/下标不合法，会返回undefined
let m1 = 'hello';
// m1[0] = h, m1[-1] = undefined, m1[6] = undefined, m1['x'] = undefined
console.log(`m1[0] = ${m1[0]}, m1[-1] = ${m1[-1]}, m1[6] = ${m1[6]}, m1['x'] = ${m1['x']}`);

// 不能通过下标修改字符串指定位置的字符
m1[0] = 'a';
console.log(`m1 = ${m1}`);                  // m1 = hello

// length 返回字符串的长度，也不能修改
console.log(`m1.length = ${m1.length}`);    // m1.length = 5
m1.length = 100;
console.log(`m1.length = ${m1.length}`);    // m1.length = 5



/**
 * 2、把字符串分割成字符串数组 --- str.split(separator, length):
 *          separator: 按照str中的什么进行分割
 *          length: 返回的数组最大长度
 * */
console.log('==========================2、分割线=========================');



/**
 * 3、把字符串中的某些字符替换为指定字符 --- str.replace(substr, replacement)
 *           substr: 替换为哪个字符
 *           replacement: 需要替换的字符
 * */
console.log('==========================3、分割线=========================');



/**
 * 4、 返回字符串中首次出现subStr的位置 --- str.indexOf(subStr)
 *          若没有返回-1
 * */
console.log('==========================4、分割线=========================');



/**
 * 5、获取字符串指定下标的字符， --- str.charAt(index):
 *          若越界返回空字符串
 * */
console.log('==========================5、分割线=========================');



/**
 * 6、获取字符串指定下标的Unicode值 --- str.charCodeAt(index)
 *          若越界返回NaN
 * */
console.log('==========================6、分割线=========================');



/**
 * 7、拼接字符串 --- str.concat(str1, str2, ...)
 *          不改变原str（字符串拼接推荐用+）
 * */
console.log('==========================7、分割线=========================');



/**
 * 8、从fromIndex向前查找subStr在str中的位置 --- str.lastIndexOf(subStr, fromIndex)
 *          第一次找到即返回下标，否则返回-1
 * */
console.log('==========================8、分割线=========================');



/**
 * 9、检索str中匹配subStr/正则表达式的值 --- str.match(subStr/regexp)
 * */
console.log('==========================9、分割线=========================');



/**
 * 10、检索str中匹配subStr/正则表达式的值 --- str.search(subStr/regexp)
 *          返回第一个匹配的子串的起始下标，没有匹配的返回-1
 * */
console.log('==========================10、分割线=========================');



/**
 * 11、字符串截取 --- str.slice(from, until)
 *          from为起始位置下标（包含）
 *          until为结束位置下标（不包含）
 * */
console.log('==========================11、分割线=========================');



/**
 * 12、字符串截取 --- str.substr(start, length)
 *          start为起始位置
 *          length为子串长度
 * */
console.log('==========================12、分割线=========================');



/**
 * 13、字符串截取 --- str.substring(start, stop)
 *          与slice不同的是，参数不能有负数
 * */
console.log('==========================13、分割线=========================');



/**
 * 14、字符串大小写转换 --- str.toLowerCase(), str.toUpperCase():
 * */
console.log('==========================14、分割线=========================');
